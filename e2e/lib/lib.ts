import { expect } from '@playwright/test';

/**
 * Helper function to verify the presence of multiple sections on a page.
 */
export async function expectSections({ page, pageName, sections } : {
    page: import('@playwright/test').Page,
    pageName: string,
    sections: string[],
}) {
    for (const section of sections) {
        const locator = `data-test=${pageName}-${section}`;
        await expect(page.locator(locator)).toBeVisible();
    }
}

export async function expectH1AndTitle({ page, h1, title } : {
    page: import('@playwright/test').Page,
    h1: string | RegExp,
    title: string | RegExp,
}) {
    await expect(page.locator('h1')).toHaveText(h1);
    await expect(page).toHaveTitle(title);
}

export async function expectLinks({ page, pageName, links } : {
    page: import('@playwright/test').Page,
    pageName: string,
    links: { linkLocator: string, destLocator: string, destText?: string | RegExp }[],
}) {
    for (const { linkLocator, destLocator, destText } of links) {
        const link = page.locator(`data-test=${pageName}-${linkLocator}`);

        await link.click();
        await expect(page.locator(destLocator)).toBeVisible();

        if (destText !== undefined) {
            await expect(page.locator(destLocator)).toHaveText(destText);
        }

        // go back to the previous page for the next link test
        await page.goBack();
    }
}
