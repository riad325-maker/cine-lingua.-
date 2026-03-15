/**
 * CineLingua - Core Application Logic v3.0
 * Handles shared UI components and global state
 */

const CineLingua = {
    config: {
        firebase: {
            apiKey: "AIzaSyCvi0VCJv3j6p8ICT1f97TePwDXAazmQMw",
            authDomain: "cinelingua-fe7f1.firebaseapp.com",
            projectId: "cinelingua-fe7f1",
            storageBucket: "cinelingua-fe7f1.firebasestorage.app",
            messagingSenderId: "157697610841",
            appId: "1:157697610841:web:529db81f264e1a84ab0d48"
        },
        vapidKey: "BLRwJpw7gMvb5-pZVmo_zw0el29GABJhFAYMWMso3mcMHU_mQsOLnuL5x7YfRoQ_ujItpTuslqg_LM56Mdom5v4"
    },

    init() {
        this.injectNavbar();
        this.injectFooter();
        this.injectSettings();
        this.initTheme();
        this.initFirebase();
        this.initAOS();
        this.checkStreak();
        this.registerSW();
    },

    // ===== UI INJECTION =====
    injectNavbar() {
        if (document.querySelector('.navbar')) return;
        const nav = document.createElement('nav');
        nav.className = 'navbar';
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        nav.innerHTML = `
            <div class="nav-container">
                <a class="logo" href="index.html"><i class="fas fa-film"></i> <span data-i18n="siteName">CineLingua</span></a>
                <button class="menu-toggle" onclick="CineLingua.toggleMenu()"><i class="fas fa-bars"></i></button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}" data-i18n="nav-home">الرئيسية</a></li>
                    <li><a href="lessons.html" class="${currentPath === 'lessons.html' ? 'active' : ''}" data-i18n="nav-lessons">الكلمات</a></li>
                    <li><a href="stories.html" class="${currentPath === 'stories.html' ? 'active' : ''}" data-i18n="nav-stories">القصص</a></li>
                    <li><a href="tenses.html" class="${currentPath === 'tenses.html' ? 'active' : ''}" data-i18n="nav-tenses">الأزمنة</a></li>
                    <li><a href="quiz.html" class="${currentPath === 'quiz.html' ? 'active' : ''}" data-i18n="nav-quiz">الاختبارات</a></li>
                    <li><a href="verbs.html" class="${currentPath === 'verbs.html' ? 'active' : ''}" data-i18n="nav-verbs">الأفعال</a></li>
                    <li><a href="grammar.html" class="${currentPath === 'grammar.html' ? 'active' : ''}" data-i18n="nav-grammar">الجرامر</a></li>
                    <li><a href="download.html" class="${currentPath === 'download.html' ? 'active' : ''}" data-i18n="nav-download">تحميل</a></li>
                </ul>
                <div class="nav-right">
                    <div class="theme-toggle">
                        <button class="theme-btn" id="nav-light-btn" onclick="CineLingua.setTheme('light')"><i class="fas fa-sun"></i></button>
                        <button class="theme-btn" id="nav-dark-btn" onclick="CineLingua.setTheme('dark')"><i class="fas fa-moon"></i></button>
                    </div>
                    <button class="settings-btn" onclick="CineLingua.openSettings()"><i class="fas fa-cog"></i></button>
                </div>
            </div>`;
        document.body.prepend(nav);
    },

    injectFooter() {
        if (document.querySelector('.footer')) return;
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `<p data-i18n="footer-txt">© 2026 CineLingua — جميع الحقوق محفوظة</p>`;
        document.body.appendChild(footer);
    },

    injectSettings() {
        if (document.getElementById('settingsPanel')) return;
        const panel = document.createElement('div');
        panel.innerHTML = `
            <div class="settings-overlay" id="settingsOverlay" onclick="CineLingua.closeSettings()"></div>
            <div class="settings-panel" id="settingsPanel">
                <div class="settings-header">
                    <div class="settings-header-left">
                        <div class="settings-header-icon"><i class="fas fa-sliders-h"></i></div>
                        <div>
                            <div class="settings-header-title" data-i18n="s-title">الإعدادات</div>
                            <div class="settings-header-sub">CineLingua</div>
                        </div>
                    </div>
                    <button class="settings-close" onclick="CineLingua.closeSettings()"><i class="fas fa-times"></i></button>
                </div>
                <div class="settings-body">
                    <div class="settings-section">
                        <div class="settings-section-title"><i class="fas fa-palette"></i> <span data-i18n="s-appearance">المظهر</span></div>
                        <div class="settings-theme-row">
                            <button class="settings-theme-btn" id="btn-light" onclick="CineLingua.setTheme('light')">
                                <div class="theme-preview light"><div class="p-bar"></div><div class="p-card"></div><div class="p-card short"></div></div>
                                <i class="fas fa-sun"></i> <span data-i18n="s-light">فاتح</span>
                            </button>
                            <button class="settings-theme-btn" id="btn-dark" onclick="CineLingua.setTheme('dark')">
                                <div class="theme-preview dark"><div class="p-bar"></div><div class="p-card"></div><div class="p-card short"></div></div>
                                <i class="fas fa-moon"></i> <span data-i18n="s-dark">داكن</span>
                            </button>
                        </div>
                    </div>
                    <div class="settings-section">
                        <div class="settings-section-title"><i class="fas fa-globe"></i> <span data-i18n="s-lang">اللغة</span></div>
                        <div class="settings-lang-row">
                            <button class="settings-lang-btn" id="lang-ar-btn" onclick="applyLanguage('ar')">
                                <span class="lang-flag">🇸🇦</span>
                                <div class="lang-info"><span class="lang-name" data-i18n="langArabic">العربية</span><span class="lang-sub">Arabic</span></div>
                                <i class="fas fa-check lang-check"></i>
                            </button>
                            <button class="settings-lang-btn" id="lang-en-btn" onclick="applyLanguage('en')">
                                <span class="lang-flag">🇬🇧</span>
                                <div class="lang-info"><span class="lang-name" data-i18n="langEnglish">English</span><span class="lang-sub">الإنجليزية</span></div>
                                <i class="fas fa-check lang-check"></i>
                            </button>
                        </div>
                    </div>
                    <div class="settings-section">
                        <div class="settings-section-title"><i class="fas fa-bell"></i> <span data-i18n="s-notif">الإشعارات</span></div>
                        <div class="settings-notif-card">
                            <div class="settings-notif-top">
                                <span class="settings-notif-label" data-i18n="s-notif-status">حالة الإشعارات</span>
                                <span class="notif-badge default" id="notifBadge" data-i18n="notif-default">غير محددة</span>
                            </div>
                            <button class="notif-action-btn" id="notifActionBtn" onclick="CineLingua.requestNotif()">
                                <i class="fas fa-bell"></i> <span id="s-notif-btn-text" data-i18n="s-notif-btn">تفعيل الإشعارات</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="settings-footer">CineLingua • v2.0</div>
            </div>`;
        document.body.appendChild(panel);
    },

    // ===== THEME MANAGEMENT =====
    initTheme() {
        const theme = localStorage.getItem('cl-theme') || 'light';
        this.setTheme(theme);
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('cl-theme', theme);

        // Update Nav buttons
        document.getElementById('nav-light-btn')?.classList.toggle('active', theme === 'light');
        document.getElementById('nav-dark-btn')?.classList.toggle('active', theme === 'dark');

        // Update Settings buttons
        document.getElementById('btn-light')?.classList.toggle('active', theme === 'light');
        document.getElementById('btn-dark')?.classList.toggle('active', theme === 'dark');
    },

    // ===== SETTINGS ACTIONS =====
    openSettings() {
        document.getElementById('settingsOverlay')?.classList.add('show');
        document.getElementById('settingsPanel')?.classList.add('show');
        this.refreshNotifBadge();
    },

    closeSettings() {
        document.getElementById('settingsOverlay')?.classList.remove('show');
        document.getElementById('settingsPanel')?.classList.remove('show');
    },

    toggleMenu() {
        document.getElementById('navMenu')?.classList.toggle('show');
    },

    // ===== NOTIFICATIONS =====
    refreshNotifBadge() {
        const perm = Notification.permission;
        const badge = document.getElementById('notifBadge');
        const btnText = document.getElementById('s-notif-btn-text');
        const btn = document.getElementById('notifActionBtn');
        if (!badge) return;

        badge.className = 'notif-badge ' + perm;

        if (perm === 'granted') {
            badge.setAttribute('data-i18n', 'notif-granted');
            if (btn) btn.disabled = true;
        } else if (perm === 'denied') {
            badge.setAttribute('data-i18n', 'notif-denied');
            if (btn) btn.disabled = true;
        } else {
            badge.setAttribute('data-i18n', 'notif-default');
            if (btn) btn.disabled = false;
        }

        if (typeof applyLanguage === 'function') {
            applyLanguage(localStorage.getItem('cl-language') || 'ar');
        }
    },

    async requestNotif() {
        if (!('Notification' in window)) return;
        const result = await Notification.requestPermission();
        this.refreshNotifBadge();
        if (result === 'granted') {
            this.getAndSaveFCMToken();
            this.sendWelcomeNotif();
        }
    },

    sendWelcomeNotif() {
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification('CineLingua 🎓', {
                body: t('notifEnabled'),
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                vibrate: [200, 100, 200]
            });
        });
    },

    // ===== FIREBASE & FCM =====
    initFirebase() {
        if (typeof firebase === 'undefined') return;
        if (!firebase.apps.length) firebase.initializeApp(this.config.firebase);

        try {
            const messaging = firebase.messaging();
            messaging.onMessage(payload => {
                const { title, body } = payload.notification;
                new Notification(title, { body, icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png' });
            });
        } catch(e) {}

        if (Notification.permission === 'granted') {
            setTimeout(() => this.getAndSaveFCMToken(), 3000);
        }
    },

    async getAndSaveFCMToken() {
        if (typeof firebase === 'undefined' || Notification.permission !== 'granted') return;
        try {
            const messaging = firebase.messaging();
            const token = await messaging.getToken({ vapidKey: this.config.vapidKey });
            if (token) {
                const db = firebase.firestore();
                await db.collection('fcmTokens').doc(token).set({
                    token,
                    lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                    userAgent: navigator.userAgent
                }, { merge: true });
            }
        } catch(e) {}
    },

    // ===== SERVICE WORKER =====
    registerSW() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(reg => {
                    console.log('SW Registered');
                    window.swRegistration = reg;
                })
                .catch(err => console.log('SW Failed', err));
        }
    },

    // ===== UTILS =====
    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 900, once: true, offset: 60 });
        }
    },

    checkStreak() {
        const streak = JSON.parse(localStorage.getItem('streak') || '{"count":0, "lastDate":""}');
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (streak.lastDate !== today) {
            if (streak.lastDate !== yesterday) {
                streak.count = 0;
            }
            // count is updated when a lesson is completed
            localStorage.setItem('streak', JSON.stringify(streak));
        }
    }
};

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    CineLingua.init();

    // Globalize common functions for inline onclick handlers (to maintain compatibility during refactor)
    window.setTheme = (t) => CineLingua.setTheme(t);
    window.openSettings = () => CineLingua.openSettings();
    window.closeSettings = () => CineLingua.closeSettings();
    window.toggleMenu = () => CineLingua.toggleMenu();
});
