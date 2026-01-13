import { expect, test } from '@playwright/test';
import { expectH1AndTitle, expectSections, expectLinks } from './lib/lib';

test.beforeEach(async ({ page }) => {
    await page.goto('/our-sites');
});

test.describe('Our Sites', () => {
    test('has expected content', async ({ page }) => {
        await expectSections({
            page,
            pageName: 'our-sites',
            sections: [
                'overview',
                'details',
                'eligibility',
                'locations',
                'map',
            ]
        });

        await expectH1AndTitle({
            page,
            h1 : "Get Connected",
            title: "Get Connected - Seattle Community Network"
        });
    });

    test('main CTAs link correctly', async ({ page }) => {
        await expectLinks({
            page,
            pageName: 'our-sites',
            links: [
                {
                    linkLocator: 'map-cta',
                    destLocator: 'h1'
                }
            ]
        });
    });

    test('google map iframe is loaded', async ({ page }) => {
        await expect(page.locator('iframe[src*="google.com/maps"]')).toBeVisible();
    });
});
