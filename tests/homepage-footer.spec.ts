import { test, expect } from '@playwright/test';

test.describe('Homepage footer links', () => {
  test('footer contains legal links pointing to correct routes', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.ok()).toBeTruthy();

    const privacyLink = page.getByRole('link', { name: 'Privacy Policy' });
    const termsLink = page.getByRole('link', { name: 'Terms of Service' });

    await expect(privacyLink).toBeVisible();
    await expect(termsLink).toBeVisible();

    await expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
    await expect(termsLink).toHaveAttribute('href', '/terms-of-service');
  });
});


