import { test, expect } from '@playwright/test';

test('homepage has correct title and renders styles', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/U2CleanPro/);
  const h1 = page.locator('h1');
  await expect(h1).toContainText('Kebersihan Profesional, Hasil Maksimal');
  await page.screenshot({ path: 'jules-scratch/verification/verification.png' });
});
