const { test, expect } = require('@playwright/test');

test('TC1 - Register a new customer', async ({ page }) => {
  const email = `student${Date.now()}@example.com`;

  await page.goto('/auth/register');
  await page.getByTestId('first-name').fill('Test');
  await page.getByTestId('last-name').fill('Student');
  await page.getByTestId('dob').fill('1998-01-01');
  await page.getByTestId('street').fill('Test Street');
  await page.getByTestId('postal_code').fill('10001');
  await page.getByTestId('city').fill('New York');
  await page.getByTestId('state').fill('NY');
  await page.getByTestId('country').selectOption('US');
  await page.getByTestId('phone').fill('2025550147');
  await page.getByTestId('house_number').fill('12');
  await page.getByTestId('email').fill(email);
  await page.getByTestId('password').fill('TestPass123!');
  await page.getByTestId('register-submit').click();

  await expect(page.getByText(/success|registered|account created|sign in|login/i).first()).toBeVisible();
});