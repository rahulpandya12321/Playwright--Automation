    import { test, expect } from '@playwright/test';

test('TC05 - Verify All Products', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    await page.getByRole('link', { name: 'Products' }).click();

    await expect(page).toHaveURL(/products/);

    await expect(page.locator('.features_items')).toBeVisible();

    await page.locator('a[href="/product_details/1"]').click();

    await expect(page).toHaveURL(/product_details/);

    await expect(page.locator('.product-information h2')).toBeVisible();

    await expect(page.getByText('Category:')).toBeVisible();

    await expect(page.getByText('Rs.')).toBeVisible();

    await expect(page.getByText('Availability:')).toBeVisible();

    await expect(page.getByText('Condition:')).toBeVisible();

    await expect(page.getByText('Brand:')).toBeVisible();

});