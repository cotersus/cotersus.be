import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/en.html');

  // Check page title
  await expect(page).toHaveTitle(/Cotersus/);

  // Check hero heading
  const h1 = page.locator('h1').first();
  await expect(h1).toContainText('Senior software delivery without the usual drag.');

  // Check first section heading
  const firstH2 = page.locator('h2').first();
  await expect(firstH2).toContainText('The support you need to ship with confidence.');
});
