import { test, expect } from '@playwright/test';

test.describe('Reset Password', () => {
  test('shows form and email parsed from fragment', async ({ page }) => {
    const email = 'student@rochester.edu';
    const hash = `#access_token=abc123&type=recovery&email=${encodeURIComponent(email)}`;
    await page.goto(`/reset-password${hash}`);

    await expect(page.getByRole('heading', { name: 'Reset your password' })).toBeVisible();
    await expect(page.getByLabel('New password')).toBeVisible();
    await expect(page.getByLabel('Confirm password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  });

  test('navigates to success page after successful update', async ({ page }) => {
    const email = 'student@rochester.edu';
    const hash = `#access_token=abc123&type=recovery&email=${encodeURIComponent(email)}`;
    await page.goto(`/reset-password${hash}`);

    // Fill matching passwords
    await page.getByLabel('New password').fill('StrongPassw0rd!');
    await page.getByLabel('Confirm password').fill('StrongPassw0rd!');

    // Click submit. In tests we cannot perform real Supabase call, so
    // implementation should navigate to /reset-password/success after
    // a successful client-side call; we assert the final URL/text.
    await page.getByRole('button', { name: 'Submit' }).click();

    // The success page content
    await expect(page).toHaveURL(/\/reset-password\/success/);
    await expect(page.getByRole('heading', { name: 'Password updated' })).toBeVisible();
    await expect(page.getByText('Successfully updated password, please get back to the app.')).toBeVisible();
  });

  test('shows descriptive error on password mismatch', async ({ page }) => {
    const email = 'student@rochester.edu';
    const hash = `#access_token=abc123&type=recovery&email=${encodeURIComponent(email)}`;
    await page.goto(`/reset-password${hash}`);

    // Mismatch passwords should produce immediate validation error without calling API
    await page.getByLabel('New password').fill('StrongPassw0rd!');
    await page.getByLabel('Confirm password').fill('Mismatch123!');

    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Passwords do not match.')).toBeVisible();
  });

  test('shows error when password is shorter than 6 characters', async ({ page }) => {
    const email = 'student@rochester.edu';
    const hash = `#access_token=abc123&type=recovery&email=${encodeURIComponent(email)}`;
    await page.goto(`/reset-password${hash}`);

    await page.getByLabel('New password').fill('123');
    await page.getByLabel('Confirm password').fill('123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('Password must be at least 6 characters.')).toBeVisible();
  });

  test('redirects to error page when fragment has error parameters', async ({ page }) => {
    const fragment = '#error=access_denied&error_code=otp_expired&error_description=Email%20link%20is%20invalid%20or%20has%20expired';
    await page.goto(`/reset-password${fragment}`);

    await expect(page).toHaveURL(/\/reset-password\/error/);
    await expect(page.getByRole('heading', { name: "Oops, we couldn't reset your password" })).toBeVisible();
    await expect(page.getByText('Email link is invalid or has expired')).toBeVisible();
  });
});


