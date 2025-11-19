import { test, expect } from '@playwright/test';

test.describe('Account Deletion Guide', () => {
  test('renders guide with hero, breadcrumbs, steps and images', async ({ page }) => {
    await page.goto('/guides/account-deletion');

    // H1 title
    await expect(page.getByRole('heading', { level: 1, name: /Delete RocTrades Account/i })).toBeVisible();

    // iOS and Android mention
    await expect(page.getByText(/iOS/i)).toBeVisible();
    await expect(page.getByText(/Android/i)).toBeVisible();

    // Breadcrumbs
    const breadcrumbs = page.locator('nav[aria-label="Breadcrumbs"]');
    await expect(breadcrumbs).toBeVisible();
    await expect(breadcrumbs.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    await expect(breadcrumbs.getByRole('link', { name: /Guides/i })).toHaveAttribute('href', '/guides');
    await expect(breadcrumbs.getByText(/Delete RocTrades Account/i)).toBeVisible();

    // Steps headings and text
    for (let i = 1; i <= 6; i++) {
      await expect(page.getByRole('heading', { level: 2, name: new RegExp(`^Step ${i}\\b`, 'i') })).toBeVisible();
    }

    // Images for each step with accessible alt text
    for (let i = 1; i <= 6; i++) {
      const img = page.locator(`img[alt*="Step ${i}"]`);
      await expect(img, `Missing image for step ${i}`).toHaveCount(1);
      await expect(img).toBeVisible();
    }

    // Callout/note about 1 minute and success prompt
    await expect(page.getByRole('note').getByText(/takes about a minute/i)).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /Success Prompt/i })).toBeVisible();
  });

  test('has no horizontal overflow on common viewports', async ({ page }) => {
    // Desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/guides/account-deletion');
    let overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
    expect(overflow).toBeTruthy();

    // Mobile
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/guides/account-deletion');
    overflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
    expect(overflow).toBeTruthy();
  });
});


