import { test, expect } from '@playwright/test';

test('TC13 - Verify Product Quantity in Cart', async ({ page }) => {

  test.setTimeout(60000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Click View Product
  await page.locator('a[href="/product_details/1"]').click();

  // Step 5: Verify product details page
  await expect(page).toHaveURL(/product_details/);

  // Step 6: Increase quantity to 4
  await page.locator('#quantity').fill('4');

  // Step 7: Click Add to Cart
  await page.locator('button.cart').click();

  // Step 8: Click View Cart
  await page.getByRole('link', { name: 'View Cart' }).click();

  // Step 9: Verify quantity is 4
  await expect(
    page.locator('.cart_quantity button')
  ).toHaveText('4');

});