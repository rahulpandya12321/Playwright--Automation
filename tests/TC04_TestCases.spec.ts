import { test, expect } from '@playwright/test';

test('TC04 - Test Cases Page', async ({ page }) => {

  test.setTimeout(60000);

  // Step 1 & 2: Launch browser and navigate to URL
  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Step 3: Verify home page is visible successfully
  await expect(page).toHaveURL(/automationexercise/);

  // Step 4: Click Test Cases
  await page.getByRole('link', { name: 'Test Cases', exact: true }).click();

  // Step 5: Verify Test Cases page is displayed
  await expect(page).toHaveURL(/test_cases/);

});