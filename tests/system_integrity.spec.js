const { test, expect } = require('@playwright/test');

test.describe('CineLingua System Integrity', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/index.html');
    });

    test('Theme switching persists across pages', async ({ page }) => {
        // Toggle Dark Mode
        await page.click('.settings-btn');
        await page.waitForSelector('#settingsPanel.show');
        await page.click('#btn-dark');
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

        // Close settings
        await page.click('#settingsOverlay');
        await page.waitForSelector('#settingsPanel:not(.show)');

        // Navigate to Lessons and check theme
        await page.click('a[data-i18n="nav-lessons"]');
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    });

    test('Language switching updates UI globally', async ({ page }) => {
        // Toggle English
        await page.click('.settings-btn');
        await page.waitForSelector('#settingsPanel.show');
        await page.click('#lang-en-btn');

        // Check Home page strings
        await expect(page.locator('h1')).toHaveText(/Learn English Smartly/);

        // Close settings
        await page.click('#settingsOverlay');
        await page.waitForSelector('#settingsPanel:not(.show)');

        // Navigate to Quiz and check strings
        await page.click('a[data-i18n="nav-quiz"]');
        await expect(page.locator('h1')).toHaveText(/Test Your Level/);
    });

    test('Navigation and component injection', async ({ page }) => {
        // Verify Navbar and Footer on Home
        await expect(page.locator('nav.navbar')).toBeVisible();
        await expect(page.locator('footer.footer')).toBeVisible();

        // Navigate through all primary pages
        const pages = ['nav-lessons', 'nav-stories', 'nav-tenses', 'nav-quiz', 'nav-verbs', 'nav-grammar'];
        for (const p of pages) {
            await page.click(`a[data-i18n="${p}"]`);
            await expect(page.locator('nav.navbar')).toBeVisible();
            await expect(page.locator('footer.footer')).toBeVisible();
        }
    });
});
