import { test, expect } from '@playwright/test';

test('TC14 - Verify Scroll Up without Arrow', async ({ page }) => {

  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#footer').scrollIntoViewIfNeeded();

  await expect(page.getByText('Subscription')).toBeVisible();

  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });

  await expect(
    page.getByRole('heading', {
      name: 'Full-Fledged practice website for Automation Engineers'
    }).first()
  ).toBeVisible();

});