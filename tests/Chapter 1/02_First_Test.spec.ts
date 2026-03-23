// Import playright module
import { test, expect } from '@playwright/test'

// Write a test
test('My First Playright Typescript Test', async ({ page }) => {
    // GO to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})