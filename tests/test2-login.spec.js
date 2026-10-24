
const { test, expect } = require('@playwright/test');

test('TC2 - Log in', async ({ page }) => {
  // Valid login
  await page.goto('/auth/login');
  await page.getByTestId('email').fill('customer2@practicesoftwaretesting.com');
  await page.getByTestId('password').fill('welcome01');
  await page.getByTestId('login-submit').click();

  await expect(page).toHaveURL(/account/);

  // Invalid login
  await page.goto('/auth/login');
  await page.getByTestId('email').fill('wrong@example.com');
  await page.getByTestId('password').fill('WrongPassword123!');
  await page.getByTestId('login-submit').click();

  await expect(
    page.getByText(/invalid|incorrect|failed|wrong/i).first()
  ).toBeVisible();
});