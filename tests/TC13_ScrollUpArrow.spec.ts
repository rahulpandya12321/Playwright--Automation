import { test, expect } from '@playwright/test';

test('TC13 - Verify Scroll Up using Arrow Button', async ({ page }) => {

  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#footer').scrollIntoViewIfNeeded();

  await expect(page.getByText('Subscription')).toBeVisible();

  await page.locator('#scrollUp').click();

  await expect(
    page.getByRole('heading', {
      name: 'Full-Fledged practice website for Automation Engineers'
    }).first()
  ).toBeVisible();

});