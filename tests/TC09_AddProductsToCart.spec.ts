import { test, expect } from '@playwright/test';

test('TC09 - Add Products in Cart', async ({ page }) => {

  test.setTimeout(60000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Click Products button
  await page.getByRole('link', { name: /Products/i }).click();

  // Step 5: Hover over first product and click Add to cart
  const firstProduct = page.locator('.single-products').first();

  await firstProduct.hover();
  await firstProduct.getByText('Add to cart').first().click();

  // Step 6: Click Continue Shopping
  await page.getByRole('button', {
    name: 'Continue Shopping'
  }).click();

  // Step 7: Hover over second product and click Add to cart
  const secondProduct = page.locator('.single-products').nth(1);

  await secondProduct.hover();
  await secondProduct.getByText('Add to cart').first().click();

  // Step 8: Click View Cart
  await page.getByRole('link', {
    name: 'View Cart'
  }).click();

  // Step 9: Verify both products are added to cart
  const product1 = page.locator('#product-1');
  const product2 = page.locator('#product-2');

  await expect(product1).toBeVisible();
  await expect(product2).toBeVisible();

  // Step 10: Verify prices
  await expect(
    product1.locator('.cart_price')
  ).toContainText('Rs.');

  await expect(
    product2.locator('.cart_price')
  ).toContainText('Rs.');

  // Verify quantities
  await expect(
    product1.locator('.cart_quantity')
  ).toContainText('1');

  await expect(
    product2.locator('.cart_quantity')
  ).toContainText('1');

  // Verify total prices
  await expect(
    product1.locator('.cart_total')
  ).toContainText('Rs.');

  await expect(
    product2.locator('.cart_total')
  ).toContainText('Rs.');

});