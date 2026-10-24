const { test, expect } = require('@playwright/test');

test('TC3 - Buy a product', async ({ page }) => {
  await page.goto('/');
  const productName = await page.getByTestId('product-name').first().innerText();
  await page.getByTestId('product-name').first().click();

  await page.getByTestId('add-to-cart').click();
  await page.getByTestId('nav-cart').click();
  await expect(page.getByText(productName, { exact: false }).first()).toBeVisible();

  await page.getByRole('link', { name: /checkout/i })
    .or(page.getByRole('button', { name: /checkout/i })).click();
  await expect(page).toHaveURL(/checkout|cart|login/i);
});