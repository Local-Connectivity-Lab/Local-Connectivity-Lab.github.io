import { test } from '@playwright/test';
import { expectH1AndTitle, expectSections, expectLinks } from './lib/lib';

test.beforeEach(async ({ page }) => {
    await page.goto('/about-us');
});

test.describe('About', () => {
    test('has expected content', async ({ page }) => {
        await expectH1AndTitle({
            page,
            h1 : "Local Connectivity Lab",
            title: "About Us - Seattle Community Network"
        });

        await expectSections({
            page,
            pageName: 'about-us',
            sections: [
                "lcl",
                'mission',
                'vision',
                'values',
                'social'
            ]
        });
    });

    test('main CTAs link correctly', async ({ page }) => {
        await expectLinks({
            page,
            pageName: 'about-us',
            links: [
                {
                    linkLocator: 'donate-cta',
                    destLocator: 'h1',
                    destText : "Make a Donation"
                }
            ]
        });
    });
});
