import { test, expect } from '@playwright/test';

test('TC07 - Verify Subscription on Home Page', async ({ page }) => {

  test.setTimeout(60000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible successfully
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Scroll down to footer
  await page.locator('#footer').scrollIntoViewIfNeeded();

  // Step 5: Verify SUBSCRIPTION text
  await expect(page.getByText('Subscription')).toBeVisible();

  // Step 6: Enter email address
  await page.locator('#susbscribe_email').fill('rahul.pandya@qable.io');

  // Step 7: Click Subscribe button
  await page.locator('#subscribe').click();

  // Step 8: Verify success message
  await expect(
    page.getByText('You have been successfully subscribed!')
  ).toBeVisible();

});