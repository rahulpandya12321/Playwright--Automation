import { test, expect } from '@playwright/test';

test('TC12 - View Brand Products', async ({ page }) => {

  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.getByRole('link', { name: 'Products' }).click();

  await expect(page.getByText('Brands')).toBeVisible();

  await page.getByRole('link', { name: 'Polo' }).click();

  await expect(page).toHaveURL(/brand_products\/Polo/);

  await expect(page.getByText(/Brand - Polo Products/i)).toBeVisible();

  await page.getByRole('link', { name: 'H&M' }).click();

  await expect(page).toHaveURL(/brand_products\/H&M/);

  await expect(page.getByText(/Brand - H&M Products/i)).toBeVisible();

});