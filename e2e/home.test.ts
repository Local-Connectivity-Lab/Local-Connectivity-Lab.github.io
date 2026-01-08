import { expect, test } from '@playwright/test';
import { expectH1AndTitle, expectLinks, expectSections } from './lib/lib';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Home', () => {
    test('has expected content', async ({ page }) => {
        await expectSections({
            page,
            pageName: 'home',
            sections: [
                'carousel',
                'hero',
                'building-image',
                'overview',
                'get-involved',
                'calendar',
                'partners',
            ]
        });

        await expectH1AndTitle({
            page,
            h1 : "Seattle Community Network",
            title: "Seattle Community Network"
        });
    });

    test('main CTAs link correctly', async ({ page }) => {
        await expectLinks({
            page,
            pageName: 'home',
            links: [
                {
                    linkLocator: 'hero-cta',
                    destLocator: 'h1#join-us'
                },
                {
                    linkLocator: 'overview-cta',
                    destLocator: 'h1#seattle-community-network-docs'
                },
                {
                    linkLocator: 'involved-volunteer-cta',
                    destLocator: 'h1#join-us'
                },
                {
                    linkLocator: 'involved-connect-cta',
                    destLocator: 'h1',
                    destText : /Our Sites|Get Connected/
                }
            ]
        });
    });

    test('google calendar iframe is loaded', async ({ page }) => {
        await expect(page.locator('iframe[src*="calendar.google.com"]')).toBeVisible();
    });

    test('partners section has image', async ({ page }) => {
        const partnersImage = page.locator('[data-test=home-partners] img');

        await expect(partnersImage).toBeVisible();
    });
});
