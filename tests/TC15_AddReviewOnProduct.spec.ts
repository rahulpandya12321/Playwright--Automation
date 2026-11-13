import { test, expect } from '@playwright/test';

test('TC15 - Add Review on Product', async ({ page }) => {

  await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.getByRole('link', { name: 'Products' }).click();

  await expect(page).toHaveURL(/products/);

  await page.locator('a[href="/product_details/1"]').click();

  await expect(page.getByText('Write Your Review')).toBeVisible();

  await page.locator('#name').fill('Rahul Pandya');

  await page.locator('#email').fill('rahul.pandya0323@gmail.com');

  await page.locator('#review').fill('Excellent product. Playwright automation testing review.');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(
    page.getByText('Thank you for your review.')
  ).toBeVisible();

});