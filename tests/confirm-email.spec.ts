import { test, expect } from '@playwright/test';

test.describe('Confirm Email', () => {
  test('success with email shows confirmation and email text', async ({ page }) => {
    await page.goto('/confirm-email?access_token=abc123&email=student%40rochester.edu');
    await expect(page.getByRole('heading', { name: 'Email confirmed' })).toBeVisible();
    await expect(page.getByText('You can now log in with')).toBeVisible();
    await expect(page.getByText('student@rochester.edu')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go to homepage' })).toBeVisible();
  });

  test('success without email shows generic confirmation', async ({ page }) => {
    await page.goto('/confirm-email?access_token=abc123');
    await expect(page.getByRole('heading', { name: 'Email confirmed' })).toBeVisible();
    await expect(page.getByText('You can now log in.')).toBeVisible();
  });

  test('error with description shows message and details', async ({ page }) => {
    await page.goto('/confirm-email?error=token_expired&error_description=Your%20confirmation%20link%20has%20expired');
    await expect(
      page.getByRole('heading', { name: "Oops, we couldn't confirm your email" })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'contact@roctrades.com' })).toBeVisible();
    await expect(page.getByText('Error details: Your confirmation link has expired')).toBeVisible();
  });

  test('error without description shows Unknown', async ({ page }) => {
    await page.goto('/confirm-email?error=unknown_error');
    await expect(
      page.getByRole('heading', { name: "Oops, we couldn't confirm your email" })
    ).toBeVisible();
    await expect(page.getByText('Error details: Unknown')).toBeVisible();
  });

  test('no params shows Unknown error', async ({ page }) => {
    await page.goto('/confirm-email');
    await expect(
      page.getByRole('heading', { name: "Oops, we couldn't confirm your email" })
    ).toBeVisible();
    await expect(page.getByText('Error details: Unknown')).toBeVisible();
  });

  test('fragment error params show message and details', async ({ page }) => {
    await page.goto('/confirm-email#error=access_denied&error_code=otp_expired&error_description=Email%20link%20is%20invalid%20or%20has%20expired');
    await expect(
      page.getByRole('heading', { name: "Oops, we couldn't confirm your email" })
    ).toBeVisible();
    await expect(
      page.getByText('Error details: Email link is invalid or has expired')
    ).toBeVisible();
  });
});


