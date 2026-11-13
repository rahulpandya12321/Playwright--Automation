import { test, expect } from '@playwright/test';

test('TC08 - Verify Subscription in Cart Page', async ({ page }) => {

  test.setTimeout(60000);

  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveURL(/automationexercise/);

  await page.getByRole('link', { name: 'Cart' }).click();

  await expect(page).toHaveURL(/view_cart/);

  await page.locator('#footer').scrollIntoViewIfNeeded();

  await expect(page.getByText('Subscription')).toBeVisible();

  await page.locator('#susbscribe_email')
    .fill('rahul.pandya0323@gmail.com');

  await page.locator('#subscribe').click();

  await expect(
    page.locator('.alert-success')
  ).toContainText(
    'You have been successfully subscribed!'
  );

});