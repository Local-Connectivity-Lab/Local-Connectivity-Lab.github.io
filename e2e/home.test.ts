import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Home Page', () => {
    test('home page has expected content', async ({ page }) => {
        const locators = [
            'data-test=home-carousel',
            'data-test=home-hero',
            'data-test=home-building-image',
            'data-test=home-overview',
            'data-test=home-get-involved',
            'data-test=home-calendar',
            'data-test=home-partners',
        ];

        await expect(page.locator('header h1')).toBeVisible();
        await expect(page).toHaveTitle(/seattle community network/i);

        for (const locator of locators) {
            await expect(page.locator(locator)).toBeVisible();
        }
    });

    test('get involved button links to docs', async ({ page }) => {
        const getInvolvedButton = page.locator('data-test=home-hero-cta-button');

        await getInvolvedButton.click();

        await expect(page.locator('h1#join-us')).toBeVisible();
    });

    test('about us button links to about page', async ({ page }) => {
        const aboutUsButton = page.locator('data-test=home-overview-about-button');

        await aboutUsButton.click();

        await expect(page.locator('h1#seattle-community-network-docs')).toBeVisible();
    });

    test('google calendar iframe is loaded', async ({ page }) => {
        await expect(page.locator('iframe[src*="calendar.google.com"]')).toBeVisible();
    });

    test('partners section has image', async ({ page }) => {
        const partnersImage = page.locator('[data-test=home-partners] img');

        await expect(partnersImage).toBeVisible();
    });
});
