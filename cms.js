/* Neon Dodger - single-file game logic (kept in cms.js to match repo layout). */

(() => {
    /** @type {HTMLCanvasElement|null} */
    const canvas = document.getElementById("game");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const $ = (id) => /** @type {HTMLElement} */ (document.getElementById(id));
    const statScore = $("statScore");
    const statBest = $("statBest");
    const statLevel = $("statLevel");
    const statStatus = $("statStatus");

    const overlay = $("overlay");
    const overlayTitle = $("overlayTitle");
    const overlayBody = $("overlayBody");

    const btnStart = $("btnStart");
    const btnPause = $("btnPause");
    const btnRestart = $("btnRestart");
    const btnOverlayStart = $("btnOverlayStart");
    const btnOverlayHow = $("btnOverlayHow");

    /** @type {"menu"|"running"|"paused"|"gameover"} */
    let mode = "menu";

    const W = canvas.width;
    const H = canvas.height;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const bestKey = "neon-dodger-best";
    const readBest = () => {
        const v = Number.parseFloat(localStorage.getItem(bestKey) ?? "0");
        return Number.isFinite(v) ? Math.max(0, v) : 0;
    };
    const writeBest = (v) => localStorage.setItem(bestKey, String(Math.max(0, Math.floor(v))));

    let best = readBest();
    statBest.textContent = String(best);

    const input = {
        left: false,
        right: false,
    };

    const player = {
        w: 36,
        h: 18,
        x: W / 2,
        y: H - 50,
        speed: 340, // px/s
    };

    /** @type {{x:number,y:number,w:number,h:number,vy:number}[]} */
    let hazards = [];

    let score = 0;
    let level = 1;
    let elapsed = 0;
    let spawnT = 0;
    let spawnEvery = 0.85; // seconds

    let lastT = 0;

    function resetGame() {
        score = 0;
        level = 1;
        elapsed = 0;
        spawnT = 0;
        spawnEvery = 0.85;
        hazards = [];
        player.x = W / 2;
        player.y = H - 50;
        input.left = false;
        input.right = false;
        updateHud();
    }

    function setMode(next) {
        mode = next;
        statStatus.textContent =
            mode === "menu" ? "Ready" :
            mode === "running" ? "Playing" :
            mode === "paused" ? "Paused" :
            "Game over";

        if (mode === "running") {
            overlay.hidden = true;
            btnPause.removeAttribute("disabled");
            btnPause.setAttribute("aria-pressed", "false");
        } else if (mode === "paused") {
            overlay.hidden = false;
            overlayTitle.textContent = "Paused";
            overlayBody.textContent = "Press P or click Resume to continue.";
            btnOverlayStart.textContent = "Resume";
            btnPause.setAttribute("aria-pressed", "true");
        } else if (mode === "gameover") {
            overlay.hidden = false;
            overlayTitle.textContent = "Game Over";
            overlayBody.textContent = `Score: ${Math.floor(score)} — Press Space (or Play) to try again.`;
            btnOverlayStart.textContent = "Play again";
            btnPause.setAttribute("aria-pressed", "false");
        } else {
            overlay.hidden = false;
            overlayTitle.textContent = "Neon Dodger";
            overlayBody.textContent = "Move left/right, dodge hazards, and chase a new high score.";
            btnOverlayStart.textContent = "Play";
            btnPause.setAttribute("aria-pressed", "false");
        }
    }

    function updateHud() {
        statScore.textContent = String(Math.floor(score));
        statBest.textContent = String(best);
        statLevel.textContent = String(level);
    }

    function spawnHazard() {
        const w = 18 + Math.random() * 26;
        const h = 14 + Math.random() * 30;
        const x = 10 + Math.random() * (W - w - 20);
        const baseVy = 150 + Math.min(420, level * 30) + Math.random() * 70;
        hazards.push({ x, y: -h - 10, w, h, vy: baseVy });
    }

    function aabb(ax, ay, aw, ah, bx, by, bw, bh) {
        return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
    }

    function step(dt) {
        elapsed += dt;
        score += dt * (10 + level * 1.5);

        // Difficulty ramp: every ~12 seconds, bump level (capped)
        const nextLevel = clamp(1 + Math.floor(elapsed / 12), 1, 30);
        if (nextLevel !== level) level = nextLevel;

        // Spawn faster over time
        spawnEvery = clamp(0.9 - level * 0.02, 0.22, 0.9);
        spawnT += dt;
        while (spawnT >= spawnEvery) {
            spawnT -= spawnEvery;
            spawnHazard();
        }

        // Movement
        const dir = (input.right ? 1 : 0) - (input.left ? 1 : 0);
        player.x = clamp(player.x + dir * player.speed * dt, 8, W - player.w - 8);

        // Hazards
        for (const hz of hazards) {
            hz.y += hz.vy * dt;
        }
        hazards = hazards.filter((hz) => hz.y < H + 80);

        // Collision
        for (const hz of hazards) {
            if (aabb(player.x, player.y, player.w, player.h, hz.x, hz.y, hz.w, hz.h)) {
                onGameOver();
                return;
            }
        }

        updateHud();
    }

    function draw() {
        // Background
        ctx.clearRect(0, 0, W, H);

        // Subtle starfield / lines
        ctx.save();
        ctx.globalAlpha = 0.6;
        for (let y = 0; y < H; y += 28) {
            ctx.fillStyle = "rgba(255,255,255,0.03)";
            ctx.fillRect(0, y, W, 1);
        }
        ctx.restore();

        // Hazards
        for (const hz of hazards) {
            ctx.fillStyle = "rgba(255,77,109,0.90)";
            ctx.fillRect(hz.x, hz.y, hz.w, hz.h);
            ctx.strokeStyle = "rgba(255,77,109,0.35)";
            ctx.lineWidth = 2;
            ctx.strokeRect(hz.x + 1, hz.y + 1, hz.w - 2, hz.h - 2);
        }

        // Player
        ctx.fillStyle = "rgba(119,255,204,0.95)";
        ctx.fillRect(player.x, player.y, player.w, player.h);
        ctx.strokeStyle = "rgba(119,255,204,0.35)";
        ctx.lineWidth = 2;
        ctx.strokeRect(player.x + 1, player.y + 1, player.w - 2, player.h - 2);

        // Ground glow
        ctx.save();
        ctx.globalAlpha = 0.25;
        ctx.fillStyle = "rgba(119,255,204,0.35)";
        ctx.fillRect(0, H - 34, W, 2);
        ctx.restore();

        // Pause label inside canvas (optional)
        if (mode === "paused") {
            ctx.save();
            ctx.fillStyle = "rgba(0,0,0,0.35)";
            ctx.fillRect(0, 0, W, H);
            ctx.fillStyle = "rgba(232,238,255,0.92)";
            ctx.font = "800 22px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
            ctx.textAlign = "center";
            ctx.fillText("PAUSED", W / 2, H / 2);
            ctx.restore();
        }
    }

    function onGameOver() {
        if (mode !== "running") return;
        if (score > best) {
            best = Math.floor(score);
            writeBest(best);
        }
        updateHud();
        setMode("gameover");
    }

    function frame(tMs) {
        const t = tMs / 1000;
        const dt = clamp(t - lastT, 0, 1 / 20);
        lastT = t;

        if (mode === "running") step(dt);
        draw();
        requestAnimationFrame(frame);
    }

    function startOrResume() {
        if (mode === "menu") {
            resetGame();
            setMode("running");
            return;
        }
        if (mode === "paused") {
            setMode("running");
            return;
        }
        if (mode === "gameover") {
            resetGame();
            setMode("running");
        }
    }

    function togglePause() {
        if (mode === "running") setMode("paused");
        else if (mode === "paused") setMode("running");
    }

    function restart() {
        resetGame();
        setMode("running");
    }

    // UI events
    btnStart?.addEventListener("click", startOrResume);
    btnPause?.addEventListener("click", togglePause);
    btnRestart?.addEventListener("click", restart);
    btnOverlayStart?.addEventListener("click", startOrResume);
    btnOverlayHow?.addEventListener("click", () => {
        overlayTitle.textContent = "How to play";
        overlayBody.textContent = "Use ←/→ (or A/D) to move. Press P to pause. Avoid hazards. Space starts/restarts.";
        btnOverlayStart.textContent = mode === "paused" ? "Resume" : "Play";
    });

    // Keyboard
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") input.left = true;
        if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") input.right = true;

        if (e.key === "p" || e.key === "P") togglePause();
        if (e.key === "r" || e.key === "R") restart();
        if (e.key === " ") {
            e.preventDefault();
            startOrResume();
        }
    });

    window.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") input.left = false;
        if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") input.right = false;
    });

    // Pointer / touch: drag to steer
    let pointerDown = false;
    canvas.addEventListener("pointerdown", (e) => {
        pointerDown = true;
        canvas.setPointerCapture(e.pointerId);
        if (mode === "menu" || mode === "gameover") startOrResume();
    });
    canvas.addEventListener("pointerup", () => { pointerDown = false; });
    canvas.addEventListener("pointercancel", () => { pointerDown = false; });
    canvas.addEventListener("pointermove", (e) => {
        if (!pointerDown || mode !== "running") return;
        const rect = canvas.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * W;
        player.x = clamp(x - player.w / 2, 8, W - player.w - 8);
    });

    // Boot
    resetGame();
    setMode("menu");
    lastT = performance.now() / 1000;
    requestAnimationFrame(frame);
})();
