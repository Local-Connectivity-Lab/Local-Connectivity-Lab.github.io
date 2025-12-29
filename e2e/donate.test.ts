import { expect, test } from '@playwright/test';
import { expectH1AndTitle } from './lib/lib';

test.beforeEach(async ({ page }) => {
    await page.goto('/donate/');
});

test.describe('Donate', () => {
    test('has expected content', async ({ page }) => {
        await expectH1AndTitle({
            page,
            h1 : "Make a Donation",
            title: "Donate - Seattle Community Network"
        });
    });

    test('donation CTAs work', async ({ page }) => {
        const buttonLocators = [
            {
                linkLocator : 'data-test=donate-paypal',
                destLocator : 'Local Connectivity Lab'
            },
            {
                linkLocator : 'data-test=donate-gofundme',
                destLocator : 'Local Connectivity Lab'
            },
            {
                linkLocator : 'data-test=donate-square',
                destLocator : 'Seattle Community Network'
            },
        ];

        for (const {linkLocator, destLocator} of buttonLocators) {
            const cta = page.locator(linkLocator);

            await expect(page.locator(linkLocator)).toBeVisible();
            await cta.click();
            await expect(page.locator('body')).toContainText(destLocator);

            await page.goBack();
        }
    });
});
