const content = {
    en: {
        title: "Innovia Integrated Solutions",
        services: "Our Services",
        about: "About Us",
        contact: "Contact Us",
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
    document.getElementById('title').innerText = content[currentLanguage].title;
    document.getElementById('services').innerText = content[currentLanguage].services;
    document.getElementById('about').innerText = content[currentLanguage].about;
    document.getElementById('contact').innerText = content[currentLanguage].contact;
    document.getElementById('servicesDescription').innerText = content[currentLanguage].servicesDescription;
    document.getElementById('aboutDescription').innerText = content[currentLanguage].aboutDescription;
    document.getElementById('contactEmail').innerText = content[currentLanguage].contactEmail;
    document.getElementById('footer').innerText = content[currentLanguage].footer;
}
