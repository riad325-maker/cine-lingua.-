// =============================================
//  CineLingua - Translation System (AR / EN)
// =============================================

const translations = {
    ar: {
        // NAV
        siteName: "CineLingua",
        home: "الرئيسية",
        lessons: "الكلمات",
        tenses: "الأزمنة",
        stories: "القصص",
        quiz: "الاختبارات",
        download: "تحميل",
        // COMMON
        search: "ابحث...",
        save: "حفظ",
        saved: "محفوظة",
        listen: "استماع",
        all: "الكل",
        easy: "سهل",
        medium: "متوسط",
        hard: "صعب",
        beginner: "مبتدئ",
        intermediate: "متوسط",
        advanced: "متقدم",
        savedWords: "المحفوظة",
        // SETTINGS PANEL
        settings: "الإعدادات",
        appearance: "المظهر",
        language: "اللغة",
        notifications: "الإشعارات",
        lightMode: "فاتح",
        darkMode: "داكن",
        langArabic: "العربية",
        langEnglish: "English",
        notifStatus: "حالة الإشعارات",
        notifGranted: "مفعّلة ✓",
        notifDenied: "محظورة",
        notifDefault: "غير محددة",
        enableNotif: "تفعيل الإشعارات",
        notifEnabled: "الإشعارات مفعّلة",
        // INSTALL BANNER
        installTitle: "ثبّت التطبيق",
        installDesc: "احصل على تجربة أفضل",
        installBtn: "تثبيت",
        // NOTIF PROMPT
        notifPromptTitle: "ابق على اطلاع! 🔔",
        notifPromptSub: "فعّل الإشعارات لتذكيرات يومية تساعدك على الاستمرار في التعلم.",
        notifAllow: "✅ تفعيل الإشعارات",
        notifDeny: "لا شكراً",
        // NOTIF BLOCKED
        notifBlockedTitle: "الإشعارات محظورة 🔕",
        notifBlockedStep1: "اضغط على أيقونة القفل بجانب الرابط",
        notifBlockedStep2: "ابحث عن «الإشعارات»",
        notifBlockedStep3: "اضبطها على «السماح»",
        notifBlockedClose: "فهمت",
        // HERO
        heroLabel: "🎬 تعلم بطريقة مختلفة",
        heroTitle: "تعلم الإنجليزية بذكاء",
        heroDesc: "منصة تعليمية متكاملة لتعلم اللغة الإنجليزية بأسلوب عصري وممتع.",
        heroStart: "ابدأ التعلم",
        heroBrowse: "تصفح الدروس",
        // PAGES
        lessonsTitle: "الكلمات والجمل",
        tensesTitle: "الأزمنة الإنجليزية",
        storiesTitle: "القصص القصيرة",
        quizTitle: "الاختبارات",
    },
    en: {
        // NAV
        siteName: "CineLingua",
        home: "Home",
        lessons: "Words",
        tenses: "Tenses",
        stories: "Stories",
        quiz: "Quiz",
        download: "Download",
        // COMMON
        search: "Search...",
        save: "Save",
        saved: "Saved",
        listen: "Listen",
        all: "All",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        savedWords: "Saved",
        // SETTINGS PANEL
        settings: "Settings",
        appearance: "Appearance",
        language: "Language",
        notifications: "Notifications",
        lightMode: "Light",
        darkMode: "Dark",
        langArabic: "العربية",
        langEnglish: "English",
        notifStatus: "Notification Status",
        notifGranted: "Enabled ✓",
        notifDenied: "Blocked",
        notifDefault: "Not Set",
        enableNotif: "Enable Notifications",
        notifEnabled: "Notifications Enabled",
        // INSTALL BANNER
        installTitle: "Install App",
        installDesc: "Get a better experience",
        installBtn: "Install",
        // NOTIF PROMPT
        notifPromptTitle: "Stay Updated! 🔔",
        notifPromptSub: "Enable notifications for daily reminders to keep you learning.",
        notifAllow: "✅ Enable Notifications",
        notifDeny: "No Thanks",
        // NOTIF BLOCKED
        notifBlockedTitle: "Notifications Blocked 🔕",
        notifBlockedStep1: "Click the lock icon next to the URL",
        notifBlockedStep2: "Find «Notifications»",
        notifBlockedStep3: "Set it to «Allow»",
        notifBlockedClose: "Got it",
        // HERO
        heroLabel: "🎬 Learn Differently",
        heroTitle: "Learn English Smartly",
        heroDesc: "A comprehensive learning platform to master English in a modern and fun way.",
        heroStart: "Start Learning",
        heroBrowse: "Browse Lessons",
        // PAGES
        lessonsTitle: "Words & Phrases",
        tensesTitle: "English Tenses",
        storiesTitle: "Short Stories",
        quizTitle: "Quizzes",
    }
};

let currentLanguage = localStorage.getItem('cl-language') || 'ar';

function t(key) {
    return (translations[currentLanguage] && translations[currentLanguage][key]) 
        || (translations['ar'] && translations['ar'][key]) 
        || key;
}

function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cl-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (val && val !== key) {
            if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
                el.placeholder = val;
            } else {
                el.textContent = val;
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    // Update lang buttons in settings
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Initialize on load
(function initLang() {
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
})();

document.addEventListener('DOMContentLoaded', () => applyLanguage(currentLanguage));
