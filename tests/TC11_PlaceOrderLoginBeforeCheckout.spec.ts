import { test, expect } from '@playwright/test';

test('TC16 - Place Order Login Before Checkout', async ({ page }) => {

  test.setTimeout(90000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible successfully
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Click Signup / Login button
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();

  // Step 5: Fill email, password and click Login button
  await page.locator('[data-qa="login-email"]').fill('rahul.pandya@qable.io');
  await page.locator('[data-qa="login-password"]').fill('Rahul@123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 6: Verify Logged in as username
  await expect(page.getByText(/Logged in as Rahul Pandya/i)).toBeVisible();

  // Step 7: Add product to cart
  await page.locator('.single-products').first().hover();
  await page.locator('a[data-product-id="1"]').first().click();

  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // Step 8: Click Cart button
  await page.getByRole('link', { name: /Cart/i }).click();

  // Step 9: Verify cart page is displayed
  await expect(page).toHaveURL(/view_cart/);

  // Step 10: Click Proceed To Checkout
  await page.getByText('Proceed To Checkout').click();

  // Step 11: Verify Address Details and Review Your Order
  await expect(page.getByText('Address Details')).toBeVisible();
  await expect(page.getByText('Review Your Order')).toBeVisible();

  // Step 12: Enter description and click Place Order
  await page.locator('textarea[name="message"]').fill('Please deliver carefully.');

  await page.getByRole('link', { name: 'Place Order' }).click();

  // Step 13: Enter payment details
  await page.locator('[data-qa="name-on-card"]').fill('Rahul Pandya');
  await page.locator('[data-qa="card-number"]').fill('4111111111111111');
  await page.locator('[data-qa="cvc"]').fill('123');
  await page.locator('[data-qa="expiry-month"]').fill('12');
  await page.locator('[data-qa="expiry-year"]').fill('2030');

  // Step 14: Click Pay and Confirm Order
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();

  // Step 15: Verify success message
  await expect(
    page.getByText(/Congratulations! Your order has been confirmed!/i)
  ).toBeVisible();

  // Delete Account steps intentionally skipped
  // so that the same account can be reused in other test cases.

});