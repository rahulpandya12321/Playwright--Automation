import { test, expect } from '@playwright/test';

test('Negative Username', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.getByRole('textbox', { name: 'Username' }).fill('incorrectUser');

    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#error')).toBeVisible();

    await expect(page.locator('#error')).toHaveText('Your username is invalid!');

});