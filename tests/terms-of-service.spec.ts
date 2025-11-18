import { test, expect } from '@playwright/test';

test.describe('Terms of Service page', () => {
  test('loads and shows required content', async ({ page }) => {
    const response = await page.goto('/terms-of-service');
    expect(response?.ok()).toBeTruthy();

    await expect(page.getByRole('heading', { name: 'Terms of Service' })).toBeVisible();
    await expect(page.getByText('Last updated: October 14, 2025')).toBeVisible();

    // Intro mentions company/location/app
    await expect(page.getByText('We are RocTrades')).toBeVisible();
    await expect(page.getByText('New York, United States')).toBeVisible();
    await expect(page.getByText('We operate the mobile application RocTrades')).toBeVisible();

    // Table of contents items
    await expect(page.getByRole('heading', { name: '1. OUR SERVICES' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '2. INTELLECTUAL PROPERTY RIGHTS' })).toBeVisible();

    // Contact section
    const contactAddress = page.locator('address');
    await expect(contactAddress.getByRole('link', { name: 'contact@roctrades.com' })).toBeVisible();
    await expect(contactAddress.getByText('Rochester, NY 14627')).toBeVisible();
  });
});


