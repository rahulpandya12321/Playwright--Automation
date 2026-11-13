import { test, expect } from '@playwright/test';

test('TC04 - Logout User', async ({ page }) => {

  test.setTimeout(60000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible successfully
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Click Signup / Login
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();

  // Step 5: Verify Login to your account is visible
  await expect(
    page.getByText('Login to your account')
  ).toBeVisible();

  // Step 6: Enter correct email and password
  await page.locator('[data-qa="login-email"]')
    .fill('rahul.pandya@qable.io');

  await page.locator('[data-qa="login-password"]')
    .fill('Rahul@123');

  // Step 7: Click Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 8: Verify Logged in as username
  await expect(
    page.getByText('Logged in as Rahul Pandya')
  ).toBeVisible();

  // Step 9: Click Logout
  await page.getByRole('link', { name: /Logout/i }).click();

  // Step 10: Verify user is navigated to login page
  await expect(page).toHaveURL(/\/login/);

  await expect(
    page.getByText('Login to your account')
  ).toBeVisible();

});