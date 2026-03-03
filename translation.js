// translations.js
const translations = {
    ar: {
        siteName: "CineLingua",
        home: "الرئيسية",
        lessons: "الكلمات",
        stories: "القصص",
        quiz: "الاختبارات",
        search: "ابحث...",
        save: "حفظ",
        saved: "محفوظة",
        listen: "استماع"
    },
    en: {
        siteName: "CineLingua",
        home: "Home",
        lessons: "Lessons",
        stories: "Stories",
        quiz: "Quiz",
        search: "Search...",
        save: "Save",
        saved: "Saved",
        listen: "Listen"
    }
};

let currentLanguage = localStorage.getItem('language') || 'ar';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLanguage);
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    updatePageLanguage();
}

function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        keys.forEach(k => value = value[k]);
        if (value) el.textContent = value;
    });
}

document.addEventListener('DOMContentLoaded', updatePageLanguage);
