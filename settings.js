// =============================================
//  CineLingua - Settings Panel + Theme + Notif
// =============================================

// ===== THEME =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cl-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(btn => {
        const isSun = btn.innerHTML.includes('sun') || btn.dataset.theme === 'light';
        const isMoon = btn.innerHTML.includes('moon') || btn.dataset.theme === 'dark';
        btn.classList.toggle('active', (theme === 'light' && isSun) || (theme === 'dark' && isMoon));
    });
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === theme);
    });
}

const _savedTheme = localStorage.getItem('cl-theme') || 'light';
document.documentElement.setAttribute('data-theme', _savedTheme);

// ===== SETTINGS PANEL =====
function openSettings() {
    document.getElementById('settingsOverlay')?.classList.add('show');
    document.getElementById('settingsPanel')?.classList.add('show');
    refreshNotifStatus();
}

function closeSettings() {
    document.getElementById('settingsOverlay')?.classList.remove('show');
    document.getElementById('settingsPanel')?.classList.remove('show');
}

function refreshNotifStatus() {
    const badge = document.getElementById('notifStatusBadge');
    const btn = document.getElementById('notifEnableBtn');
    if (!badge || !btn) return;
    const perm = Notification.permission;
    badge.className = 'notif-status-badge ' + perm;
    badge.textContent = perm === 'granted' ? (typeof t === 'function' ? t('notifGranted') : 'مفعّلة ✓')
        : perm === 'denied' ? (typeof t === 'function' ? t('notifDenied') : 'محظورة')
        : (typeof t === 'function' ? t('notifDefault') : 'غير محددة');
    if (perm === 'granted') {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> <span>' + (typeof t === 'function' ? t('notifEnabled') : 'الإشعارات مفعّلة') + '</span>';
        btn.disabled = true;
    } else if (perm === 'denied') {
        btn.innerHTML = '<i class="fas fa-bell-slash"></i> <span>' + (typeof t === 'function' ? t('notifDenied') : 'محظورة') + '</span>';
        btn.disabled = true;
    } else {
        btn.innerHTML = '<i class="fas fa-bell"></i> <span>' + (typeof t === 'function' ? t('enableNotif') : 'تفعيل الإشعارات') + '</span>';
        btn.disabled = false;
    }
}

// ===== INJECT PANEL =====
function injectSettingsPanel() {
    if (document.getElementById('settingsPanel')) return;

    const panel = document.createElement('div');
    panel.innerHTML = `
    <div id="settingsOverlay" class="settings-overlay" onclick="closeSettings()"></div>

    <div id="settingsPanel" class="settings-panel">
        <div class="settings-header">
            <div class="settings-header-left">
                <div class="settings-header-icon"><i class="fas fa-sliders-h"></i></div>
                <div>
                    <div class="settings-header-title" data-i18n="settings">الإعدادات</div>
                    <div class="settings-header-sub">CineLingua</div>
                </div>
            </div>
            <button class="settings-close" onclick="closeSettings()"><i class="fas fa-times"></i></button>
        </div>

        <div class="settings-body">

            <!-- APPEARANCE -->
            <div class="settings-section">
                <div class="settings-section-title">
                    <i class="fas fa-palette"></i>
                    <span data-i18n="appearance">المظهر</span>
                </div>
                <div class="settings-theme-row">
                    <button class="settings-theme-btn" data-theme="light" onclick="setTheme('light')">
                        <div class="settings-theme-preview light-preview">
                            <div class="preview-bar"></div>
                            <div class="preview-card"></div>
                            <div class="preview-card short"></div>
                        </div>
                        <i class="fas fa-sun"></i>
                        <span data-i18n="lightMode">فاتح</span>
                    </button>
                    <button class="settings-theme-btn" data-theme="dark" onclick="setTheme('dark')">
                        <div class="settings-theme-preview dark-preview">
                            <div class="preview-bar"></div>
                            <div class="preview-card"></div>
                            <div class="preview-card short"></div>
                        </div>
                        <i class="fas fa-moon"></i>
                        <span data-i18n="darkMode">داكن</span>
                    </button>
                </div>
            </div>

            <!-- LANGUAGE -->
            <div class="settings-section">
                <div class="settings-section-title">
                    <i class="fas fa-globe"></i>
                    <span data-i18n="language">اللغة</span>
                </div>
                <div class="settings-lang-row">
                    <button class="settings-lang-btn" data-lang="ar" onclick="applyLanguage('ar')">
                        <span class="lang-flag">🌙</span>
                        <div class="lang-info">
                            <span class="lang-name" data-i18n="langArabic">العربية</span>
                            <span class="lang-native">Arabic</span>
                        </div>
                        <i class="fas fa-check lang-check"></i>
                    </button>
                    <button class="settings-lang-btn" data-lang="en" onclick="applyLanguage('en')">
                        <span class="lang-flag">🌐</span>
                        <div class="lang-info">
                            <span class="lang-name" data-i18n="langEnglish">English</span>
                            <span class="lang-native">الإنجليزية</span>
                        </div>
                        <i class="fas fa-check lang-check"></i>
                    </button>
                </div>
            </div>

            <!-- NOTIFICATIONS -->
            <div class="settings-section">
                <div class="settings-section-title">
                    <i class="fas fa-bell"></i>
                    <span data-i18n="notifications">الإشعارات</span>
                </div>
                <div class="settings-notif-card">
                    <div class="settings-notif-top">
                        <span class="settings-notif-label" data-i18n="notifStatus">حالة الإشعارات</span>
                        <span id="notifStatusBadge" class="notif-status-badge default">غير محددة</span>
                    </div>
                    <button id="notifEnableBtn" class="notif-enable-btn" onclick="requestNotifFromSettings()">
                        <i class="fas fa-bell"></i> <span data-i18n="enableNotif">تفعيل الإشعارات</span>
                    </button>
                </div>
            </div>

        </div>

        <div class="settings-footer">
            <span>CineLingua</span> <span style="opacity:0.4">•</span> <span>v2.0</span>
        </div>
    </div>`;

    document.body.appendChild(panel);
    setTheme(_savedTheme);
    updateSettingsLangBtns();
}

function updateSettingsLangBtns() {
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : (localStorage.getItem('cl-language') || 'ar');
    document.querySelectorAll('.settings-lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const theme = localStorage.getItem('cl-theme') || 'light';
    document.querySelectorAll('.settings-theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// Override applyLanguage to also update settings buttons
const _origApplyLanguage = typeof applyLanguage !== 'undefined' ? applyLanguage : null;

async function requestNotifFromSettings() {
    if (!('Notification' in window)) return;
    const result = await Notification.requestPermission();
    refreshNotifStatus();
    if (result === 'granted' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
            const isAr = (typeof currentLanguage !== 'undefined' ? currentLanguage : 'ar') === 'ar';
            reg.showNotification('CineLingua 🎓', {
                body: isAr ? 'تم تفعيل الإشعارات! سنذكّرك يومياً 🔔' : 'Notifications enabled! We\'ll remind you daily 🔔',
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                vibrate: [200, 100, 200]
            });
        });
    }
}

(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectSettingsPanel();
            updateSettingsLangBtns();
        });
    } else {
        injectSettingsPanel();
        updateSettingsLangBtns();
    }
})();

setTheme(_savedTheme);
