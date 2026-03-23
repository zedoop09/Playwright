import { test, expect } from '@playwright/test';

test('Test One', async ({ page }) => {

  await test.step('Navigating to URL', async () => {
    await page.goto('https://github.com/');

  })
  await test.step('Enter Username and Password', async () => {
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('rtsgdsdg');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('324513');
  })
  await test.step('Click on Sign in', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })
  await test.step('Validating the error message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })
 //Just  a comment
});