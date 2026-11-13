import { test, expect } from '@playwright/test';

test('Negative Password', async ({ page }) => 
    
    {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.getByRole('textbox', { name: 'Username' }).fill('student');

    await page.getByRole('textbox', { name: 'Password' }).fill('incorrectPassword');

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.locator('#error')).toBeVisible();

    await expect(page.locator('#error')).toHaveText('Your password is invalid!');

});