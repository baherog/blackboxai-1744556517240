const content = {
    en: {
        title: "Innovia Integrated Solutions",
        services: "Services",
        about: "About Us",
        contact: "Contact",
        servicesDescription: "We specialize in Call Center Software Solutions, CRM Software Solutions, and Integration Solutions with various third parties.",
        aboutDescription: "Innovia Integrated Solutions provides tailored solutions for all business sectors with unlimited customizations.",
        contactEmail: "info@innoviais.com",
        footer: "© 2023 Innovia Integrated Solutions. All rights reserved."
    },
    ar: {
        title: "حلول إنوفيا المتكاملة",
        services: "خدماتنا",
        about: "معلومات عنا",
        contact: "اتصل بنا",
        servicesDescription: "نحن متخصصون في حلول برامج مراكز الاتصال، وحلول برامج إدارة علاقات العملاء، وحلول التكامل مع مختلف الأطراف الثالثة.",
        aboutDescription: "تقدم حلول إنوفيا المتكاملة حلولاً مخصصة لجميع قطاعات الأعمال مع تخصيصات غير محدودة.",
        contactEmail: "info@innoviais.com",
        footer: "© 2023 حلول إنوفيا المتكاملة. جميع الحقوق محفوظة."
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    const data = content[currentLanguage];
    document.getElementById('title').innerText = data.title;
    document.getElementById('brandName').innerText = data.title;
    document.getElementById('navServices').innerText = data.services;
    document.getElementById('navAbout').innerText = data.about;
    document.getElementById('navContact').innerText = data.contact;
    document.getElementById('servicesHeading').innerText = data.services;
    document.getElementById('aboutHeading').innerText = data.about;
    document.getElementById('contactHeading').innerText = data.contact;
    document.getElementById('servicesDescription').innerText = data.servicesDescription;
    document.getElementById('aboutDescription').innerText = data.aboutDescription;
    const emailElement = document.getElementById('contactEmail');
    emailElement.innerText = data.contactEmail;
    emailElement.href = `mailto:${data.contactEmail}`;
    document.getElementById('footerText').innerText = data.footer;
}

// Initialize UI language when DOM is ready
document.addEventListener('DOMContentLoaded', function onDomReady() {
    changeLanguage(currentLanguage);
});
