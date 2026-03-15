/**
 * CineLingua Core logic
 * Centralized state, theme, and UI components management
 */

const Core = {
    state: {
        theme: localStorage.getItem('cl-theme') || 'light',
        language: localStorage.getItem('cl-language') || 'ar',
        streak: JSON.parse(localStorage.getItem('streak')) || { count: 0, lastDate: '' },
        learnedWords: JSON.parse(localStorage.getItem('learnedWords')) || [],
        savedWords: JSON.parse(localStorage.getItem('savedWords')) || [],
        completedQuizzes: JSON.parse(localStorage.getItem('cefr_completed_v2')) || [],
        savedStories: JSON.parse(localStorage.getItem('savedStories')) || [],
        savedTenses: JSON.parse(localStorage.getItem('savedTenses')) || [],
        learnedVerbs: JSON.parse(localStorage.getItem('learnedVerbs')) || [],
        savedVerbs: JSON.parse(localStorage.getItem('savedVerbs')) || [],
        learnedRules: JSON.parse(localStorage.getItem('learnedRules')) || [],
        savedRules: JSON.parse(localStorage.getItem('savedRules')) || []
    },

    init() {
        this.applyTheme(this.state.theme);
        this.checkStreak();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDomReady());
        } else {
            this.onDomReady();
        }
    },

    onDomReady() {
        this.injectComponents();
        this.setupEventListeners();
        // Initialize AOS if available
        if (window.AOS) {
            window.AOS.init({ duration: 800, once: true, offset: 50 });
        }
    },

    // ===== UI INJECTION =====
    injectComponents() {
        this.injectNavbar();
        this.injectSettingsPanel();
        this.injectFooter();
        this.injectScrollTop();
        this.injectToastContainer();
    },

    injectNavbar() {
        if (document.querySelector('.navbar')) return;
        const nav = document.createElement('nav');
        nav.className = 'navbar';
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        nav.innerHTML = `
            <div class="nav-container">
                <a class="logo" href="index.html"><i class="fas fa-film"></i> <span data-i18n="siteName">CineLingua</span></a>
                <button class="menu-toggle" id="menuToggle"><i class="fas fa-bars"></i></button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}" data-i18n="home">الرئيسية</a></li>
                    <li><a href="lessons.html" class="${currentPage === 'lessons.html' ? 'active' : ''}" data-i18n="lessons">الكلمات</a></li>
                    <li><a href="stories.html" class="${currentPage === 'stories.html' ? 'active' : ''}" data-i18n="stories">القصص</a></li>
                    <li><a href="tenses.html" class="${currentPage === 'tenses.html' ? 'active' : ''}" data-i18n="tenses">الأزمنة</a></li>
                    <li><a href="quiz.html" class="${currentPage === 'quiz.html' ? 'active' : ''}" data-i18n="quiz">الاختبارات</a></li>
                    <li><a href="verbs.html" class="${currentPage === 'verbs.html' ? 'active' : ''}" data-i18n="verbs">الأفعال</a></li>
                    <li><a href="grammar.html" class="${currentPage === 'grammar.html' ? 'active' : ''}" data-i18n="grammar">الجرامر</a></li>
                </ul>
                <div class="nav-right">
                    <div class="theme-toggle-nav">
                        <button class="theme-btn-nav" id="themeToggleBtn">
                            <i class="fas ${this.state.theme === 'light' ? 'fa-moon' : 'fa-sun'}"></i>
                        </button>
                    </div>
                    <button class="settings-btn" id="openSettingsBtn"><i class="fas fa-cog"></i></button>
                </div>
            </div>
        `;
        document.body.prepend(nav);
    },

    injectSettingsPanel() {
        if (document.getElementById('settingsPanel')) return;
        const container = document.createElement('div');
        container.id = 'settingsContainer';
        container.innerHTML = `
            <div id="settingsOverlay" class="settings-overlay"></div>
            <div id="settingsPanel" class="settings-panel">
                <div class="settings-header">
                    <div class="settings-header-left">
                        <div class="settings-header-icon"><i class="fas fa-sliders-h"></i></div>
                        <div>
                            <div class="settings-header-title" data-i18n="settings">الإعدادات</div>
                            <div class="settings-header-sub">CineLingua</div>
                        </div>
                    </div>
                    <button class="settings-close" id="closeSettingsBtn"><i class="fas fa-times"></i></button>
                </div>
                <div class="settings-body">
                    <div class="settings-section">
                        <div class="settings-section-title"><i class="fas fa-palette"></i> <span data-i18n="appearance">المظهر</span></div>
                        <div class="settings-theme-row">
                            <button class="settings-theme-btn ${this.state.theme === 'light' ? 'active' : ''}" data-theme="light">
                                <div class="theme-preview light"><div class="p-bar"></div><div class="p-card"></div><div class="p-card short"></div></div>
                                <i class="fas fa-sun"></i> <span data-i18n="lightMode">فاتح</span>
                            </button>
                            <button class="settings-theme-btn ${this.state.theme === 'dark' ? 'active' : ''}" data-theme="dark">
                                <div class="theme-preview dark"><div class="p-bar"></div><div class="p-card"></div><div class="p-card short"></div></div>
                                <i class="fas fa-moon"></i> <span data-i18n="darkMode">داكن</span>
                            </button>
                        </div>
                    </div>
                    <div class="settings-section">
                        <div class="settings-section-title"><i class="fas fa-globe"></i> <span data-i18n="language">اللغة</span></div>
                        <div class="settings-lang-row">
                            <button class="settings-lang-btn ${this.state.language === 'ar' ? 'active' : ''}" data-lang="ar">
                                <span class="lang-flag">🇸🇦</span>
                                <div class="lang-info"><span class="lang-name">العربية</span><span class="lang-sub">Arabic</span></div>
                                <i class="fas fa-check lang-check"></i>
                            </button>
                            <button class="settings-lang-btn ${this.state.language === 'en' ? 'active' : ''}" data-lang="en">
                                <span class="lang-flag">🇬🇧</span>
                                <div class="lang-info"><span class="lang-name">English</span><span class="lang-sub">الإنجليزية</span></div>
                                <i class="fas fa-check lang-check"></i>
                            </button>
                        </div>
                    </div>
                    <div class="settings-section">
                        <div class="settings-section-title"><i class="fas fa-bell"></i> <span data-i18n="notifications">الإشعارات</span></div>
                        <div class="settings-notif-card">
                            <div class="settings-notif-top">
                                <span class="settings-notif-label" data-i18n="notifStatus">حالة الإشعارات</span>
                                <span id="notifBadge" class="notif-badge ${Notification.permission}"></span>
                            </div>
                            <button class="notif-action-btn" id="notifActionBtn">
                                <i class="fas fa-bell"></i> <span data-i18n="enableNotif">تفعيل الإشعارات</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="settings-footer">CineLingua • v2.1</div>
            </div>
        `;
        document.body.appendChild(container);
        this.updateNotifBadge();
    },

    injectFooter() {
        if (document.querySelector('.footer')) return;
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `<p data-i18n="footerText">© 2026 CineLingua — جميع الحقوق محفوظة</p>`;
        document.body.appendChild(footer);
    },

    injectScrollTop() {
        if (document.getElementById('scrollTop')) return;
        const btn = document.createElement('button');
        btn.id = 'scrollTop';
        btn.className = 'scroll-top';
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(btn);
        window.addEventListener('scroll', () => {
            btn.classList.toggle('show', window.scrollY > 400);
        });
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    injectToastContainer() {
        if (document.getElementById('toastContainer')) return;
        const tc = document.createElement('div');
        tc.id = 'toastContainer';
        tc.className = 'toast-container';
        document.body.appendChild(tc);
    },

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Navbar Menu
        document.getElementById('menuToggle')?.addEventListener('click', () => {
            document.getElementById('navMenu')?.classList.toggle('show');
        });

        // Theme Toggle in Nav
        document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
            const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';
            this.applyTheme(nextTheme);
        });

        // Settings Panel
        document.getElementById('openSettingsBtn')?.addEventListener('click', () => this.openSettings());
        document.getElementById('closeSettingsBtn')?.addEventListener('click', () => this.closeSettings());
        document.getElementById('settingsOverlay')?.addEventListener('click', () => this.closeSettings());

        // Theme Switchers in Settings
        document.querySelectorAll('.settings-theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.applyTheme(btn.dataset.theme);
                document.querySelectorAll('.settings-theme-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Language Switchers
        document.querySelectorAll('.settings-lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                if (typeof window.applyLanguage === 'function') {
                    window.applyLanguage(lang);
                    this.state.language = lang;
                    document.querySelectorAll('.settings-lang-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
            });
        });

        // Notification Button
        document.getElementById('notifActionBtn')?.addEventListener('click', () => this.requestNotif());
    },

    // ===== THEME MANAGEMENT =====
    applyTheme(theme) {
        this.state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('cl-theme', theme);

        const icon = document.querySelector('#themeToggleBtn i');
        if (icon) {
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }

        // Update meta theme-color
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.setAttribute('content', theme === 'light' ? '#6366f1' : '#0f172a');
        }
    },

    // ===== SETTINGS PANEL METHODS =====
    openSettings() {
        document.getElementById('settingsOverlay')?.classList.add('show');
        document.getElementById('settingsPanel')?.classList.add('show');
        this.updateNotifBadge();
    },

    closeSettings() {
        document.getElementById('settingsOverlay')?.classList.remove('show');
        document.getElementById('settingsPanel')?.classList.remove('show');
    },

    // ===== NOTIFICATIONS =====
    updateNotifBadge() {
        const badge = document.getElementById('notifBadge');
        const btn = document.getElementById('notifActionBtn');
        if (!badge || !btn) return;

        const perm = Notification.permission;
        badge.className = 'notif-badge ' + perm;

        if (typeof window.t === 'function') {
            badge.textContent = perm === 'granted' ? t('notifGranted') : perm === 'denied' ? t('notifDenied') : t('notifDefault');
            if (perm === 'granted' || perm === 'denied') {
                btn.disabled = true;
                btn.querySelector('span').textContent = perm === 'granted' ? t('notifGranted') : t('notifDenied');
            }
        } else {
            badge.textContent = perm === 'granted' ? 'مفعّلة ✓' : perm === 'denied' ? 'محظورة' : 'غير محددة';
        }
    },

    async requestNotif() {
        const result = await Notification.requestPermission();
        this.updateNotifBadge();
        if (result === 'granted') {
            this.showToast(this.state.language === 'ar' ? 'تم تفعيل الإشعارات! 🔔' : 'Notifications enabled! 🔔', 'success');
        }
    },

    // ===== STATE & STREAK =====
    checkStreak() {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (this.state.streak.lastDate !== today) {
            if (this.state.streak.lastDate !== yesterday && this.state.streak.lastDate !== '') {
                this.state.streak.count = 0;
            }
            // We don't auto-increment here, increment happens on learning activity
        }
    },

    updateProgress(key, id, add = true) {
        let list = this.state[key] || [];
        if (add) {
            if (!list.includes(id)) {
                list.push(id);
                this.updateStreakOnActivity();
            }
        } else {
            list = list.filter(i => i !== id);
        }
        this.state[key] = list;
        const storageKey = this.getStorageKey(key);
        localStorage.setItem(storageKey, JSON.stringify(list));
        return list.length;
    },

    getStorageKey(key) {
        const map = {
            learnedWords: 'learnedWords',
            savedWords: 'savedWords',
            completedQuizzes: 'cefr_completed_v2',
            savedStories: 'savedStories',
            savedTenses: 'savedTenses',
            learnedVerbs: 'learnedVerbs',
            savedVerbs: 'savedVerbs',
            learnedRules: 'learnedRules',
            savedRules: 'savedRules'
        };
        return map[key] || key;
    },

    updateStreakOnActivity() {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (this.state.streak.lastDate !== today) {
            if (this.state.streak.lastDate === yesterday || this.state.streak.lastDate === '') {
                this.state.streak.count++;
            } else {
                this.state.streak.count = 1;
            }
            this.state.streak.lastDate = today;
            localStorage.setItem('streak', JSON.stringify(this.state.streak));
        }
    },

    // ===== UTILITIES =====
    showToast(msg, type = 'info') {
        const tc = document.getElementById('toastContainer');
        if (!tc) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icon = type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle';
        toast.innerHTML = `<i class="fas fa-${icon}"></i> <span>${msg}</span>`;

        tc.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    speak(text, lang = 'en-US', rate = 1.0) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang;
        u.rate = rate;
        window.speechSynthesis.speak(u);
    },

    // ===== GLOBAL SEARCH =====
    globalSearch(query) {
        if (!query || query.length < 2) return [];
        const q = query.toLowerCase();
        const results = [];

        // Search Words
        if (window.BEGINNER_WORDS) {
            [...window.BEGINNER_WORDS, ...window.INTERMEDIATE_WORDS, ...window.ADVANCED_WORDS].forEach(w => {
                if (w.word.toLowerCase().includes(q) || w.arabic.includes(q)) {
                    results.push({ type: 'word', title: w.word, sub: w.arabic, url: 'lessons.html', icon: 'fa-book' });
                }
            });
        }

        // Search Stories
        if (window.STORIES_DATA) {
            window.STORIES_DATA.forEach(s => {
                if (s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)) {
                    results.push({ type: 'story', title: s.title, sub: s.level.toUpperCase(), url: 'stories.html', icon: 'fa-book-open' });
                }
            });
        }

        // Search Grammar
        if (window.GRAMMAR_DATA) {
            window.GRAMMAR_DATA.forEach(g => {
                if (g.title.toLowerCase().includes(q) || g.sub.toLowerCase().includes(q) || g.rule.toLowerCase().includes(q)) {
                    results.push({ type: 'grammar', title: g.title, sub: g.sub, url: 'grammar.html', icon: 'fa-scroll' });
                }
            });
        }

        return results.slice(0, 10); // Limit to 10 results
    }
};

// Start Core
Core.init();
window.Core = Core; // Global access
