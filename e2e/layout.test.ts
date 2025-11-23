import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Layout', () => {
    test('has expected header and footer content', async ({ page }) => {
        await expect(page.locator('data-test=site-header')).toBeVisible();
        await expect(page.locator('data-test=site-footer')).toBeVisible();
    });

    test('header links work correctly', async ({ page }) => {
        const logoLink = page.locator('data-test=site-logo-link');
        await expect(logoLink).toBeVisible();
        await logoLink.click();
        await expect(page).toHaveURL('/');
    });

    test('navigation menu is present', async ({ page }) => {
        const navMenu = page.locator('data-test=site-nav');
        await expect(navMenu).toBeVisible();
    });
});
