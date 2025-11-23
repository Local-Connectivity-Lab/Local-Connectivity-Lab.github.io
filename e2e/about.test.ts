import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/about-us');
});

test.describe('About Page', () => {
    test('about page has expected content', async ({ page }) => {
        const locators = [
            'data-test=about-us-lcl',
            'data-test=about-us-mission',
            'data-test=about-us-vision',
        ];

        await expect(page.locator('main h1')).toBeVisible();
        await expect(page).toHaveTitle(/about/i);

        for (const locator of locators) {
            await expect(page.locator(locator)).toBeVisible();
        }
    });

    test('social media links', async ({ page }) => {
        const locators = [
            '[data-test=about-social] [data-test=social-facebook]',
            '[data-test=about-social] [data-test=social-twitter]',
            '[data-test=about-social] [data-test=social-instagram]',
        ];

        for (const locator of locators) {
            await expect(page.locator(locator)).toBeVisible();
        }
    });
});
