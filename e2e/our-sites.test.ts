import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/our-sites');
});

test.describe('Our Sites Page', () => {
    test('our sites page has expected content', async ({ page }) => {
        await expect(page.locator('data-test=our-sites-page')).toBeVisible();
        await expect(page.locator('main h1')).toBeVisible();
        await expect(page).toHaveTitle(/get connected/i);
    });


});
