import { test, expect } from '@playwright/test';

test('TC01 - Register User', async ({ page }) => {

  test.setTimeout(90000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible successfully
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Click Signup / Login
  await page.getByRole('link', { name: /Signup \/ Login/i }).click();

  // Step 5: Verify New User Signup
  await expect(page.getByText('New User Signup!')).toBeVisible();

  // Step 6: Enter name and unique email
  const uniqueEmail = `rahul${Date.now()}@test.com`;

  await page.getByPlaceholder('Name').fill('Rahul Pandya');

  await page.locator('input[data-qa="signup-email"]')
    .fill(uniqueEmail);

  // Step 7: Click Signup
  await page.getByRole('button', { name: 'Signup' }).click();

  // Step 8: Verify Enter Account Information
  await expect(
    page.getByText('Enter Account Information')
  ).toBeVisible();

  // Step 9: Fill account information
  await page.locator('#id_gender1').check();

  await page.locator('[data-qa="password"]')
    .fill('Rahul@123');

  await page.locator('[data-qa="days"]')
    .selectOption('10');

  await page.locator('[data-qa="months"]')
    .selectOption('5');

  await page.locator('[data-qa="years"]')
    .selectOption('1993');

  // Step 10: Select newsletter checkbox
  await page.locator('#newsletter').check();

  // Step 11: Select special offers checkbox
  await page.locator('#optin').check();

  // Step 12: Fill address details
  await page.locator('[data-qa="first_name"]')
    .fill('Rahul');

  await page.locator('[data-qa="last_name"]')
    .fill('Pandya');

  await page.locator('[data-qa="company"]')
    .fill('QABLE');

  await page.locator('[data-qa="address"]')
    .fill('Dwarkesh Business Park');

  await page.locator('[data-qa="address2"]')
    .fill('401');

  await page.locator('[data-qa="country"]')
    .selectOption('India');

  await page.locator('[data-qa="state"]')
    .fill('Gujarat');

  await page.locator('[data-qa="city"]')
    .fill('Ahmedabad');

  await page.locator('[data-qa="zipcode"]')
    .fill('3400001');

  await page.locator('[data-qa="mobile_number"]')
    .fill('8109037142');

  // Step 13: Click Create Account
  await page.getByRole('button', { name: 'Create Account' }).click();

  // Step 14: Verify Account Created
  await expect(
    page.getByText('Account Created!')
  ).toBeVisible();

  // Step 15: Click Continue
  await page.getByRole('link', { name: 'Continue' }).click();

  // Step 16: Verify Logged in as username
  await expect(
    page.getByText(/Logged in as Rahul Pandya/i)
  ).toBeVisible();

  // Step 17: Click Delete Account
  await page.getByRole('link', { name: /Delete Account/i }).click();

  // Step 18: Verify Account Deleted
  await expect(
    page.getByText('Account Deleted!')
  ).toBeVisible();

  await page.getByRole('link', { name: 'Continue' }).click();

});