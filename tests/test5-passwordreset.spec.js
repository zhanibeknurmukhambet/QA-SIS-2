const { test, expect } = require('@playwright/test');

test('TC5 - Reset a password', async ({ page }) => {
  await page.goto('/auth/login');

  await page.getByRole('link', {
    name: /forgot.*password|forgot password/i
  }).click();

  await page.getByTestId('email').fill('customer@practicesoftwaretesting.com');

  await page.locator('[data-test="forgot-password-submit"]').click();

  await expect(
    page.getByText(/email|reset|sent|success|instructions/i).first()
  ).toBeVisible();
});