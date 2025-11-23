import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/donate/');
});

test.describe('Donate Page', () => {
    test('donate page has expected content', async ({ page }) => {
        await expect(page.locator('main h1')).toBeVisible();
        await expect(page).toHaveTitle(/donate/i);
    });

    test('donation buttons are present', async ({ page }) => {
        const buttonLocators = [
            'data-test=donate-paypal',
            'data-test=donate-gofundme',
            'data-test=donate-square',
        ];

        for (const locator of buttonLocators) {
            await expect(page.locator(locator)).toBeVisible();
        }
    });
});
