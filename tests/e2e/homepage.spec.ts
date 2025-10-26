import { test, expect } from '@playwright/test';

test('homepage has expected content and styles', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toContainText('Kebersihan Profesional, Hasil Maksimal');
  await page.screenshot({ path: 'jules-scratch/verification/verification.png' });
});
