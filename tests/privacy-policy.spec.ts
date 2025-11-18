import { test, expect } from '@playwright/test';

test.describe('Privacy Policy page', () => {
  test('loads and shows required content', async ({ page }) => {
    const response = await page.goto('/privacy-policy');
    expect(response?.ok()).toBeTruthy();

    await expect(page.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeVisible();
    await expect(page.getByText('Last updated: October 14, 2025')).toBeVisible();

    // Key sections
    await expect(page.getByText('Interpretation and Definitions')).toBeVisible();
    await expect(page.getByText('Collecting and Using Your Personal Data')).toBeVisible();
    await expect(page.getByText("Children's Privacy")).toBeVisible();

    // Contact
    await expect(page.getByText('contact@roctrades.com')).toBeVisible();
  });
});


