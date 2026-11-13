import { test, expect } from '@playwright/test';

test('TC06 - Search Product', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    await page.getByRole('link', { name: 'Products' }).click();

    await expect(page).toHaveURL(/products/);

    await page.locator('#search_product').fill('Fancy Green Top');

    await page.locator('#submit_search').click();

    await expect(page.getByText('Searched Products')).toBeVisible();

    await expect(page.getByText('Fancy Green Top').first()).toBeVisible();

});