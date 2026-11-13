import { test, expect } from '@playwright/test';

test('TC08 - Verify All Products and Product Detail Page', async ({ page }) => {

  test.setTimeout(60000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible successfully
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Click on Products button
  await page.getByRole('link', { name: 'Products' }).click();

  // Step 5: Verify user is navigated to ALL PRODUCTS page successfully
  await expect(page).toHaveURL(/products/);

  // Step 6: Verify products list is visible
  await expect(page.locator('.features_items')).toBeVisible();

  // Step 7: Click on View Product of first product
  await page.locator('a[href="/product_details/1"]').click();

  // Step 8: Verify user is landed to product detail page
  await expect(page).toHaveURL(/product_details/);

  // Step 9: Verify product details are visible
  await expect(page.locator('.product-information h2')).toBeVisible();          // Product Name
  await expect(page.getByText('Category:')).toBeVisible();                      // Category
  await expect(page.getByText('Rs.')).toBeVisible();                            // Price
  await expect(page.getByText('Availability:')).toBeVisible();                  // Availability
  await expect(page.getByText('Condition:')).toBeVisible();                     // Condition
  await expect(page.getByText('Brand:')).toBeVisible();                         // Brand

});