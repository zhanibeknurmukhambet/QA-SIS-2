const { test, expect } = require('@playwright/test');

test('TC4 - Compare two products', async ({ page }) => {
  await page.goto('/');

  const products = page.getByTestId('product-name');
  await expect(products.first()).toBeVisible();

  const count = await products.count();
  expect(count).toBeGreaterThanOrEqual(2);

  const names = await products.allInnerTexts();
  expect(names[0]).not.toBe(names[1]);

  await products.nth(0).click();
  await expect(page.getByTestId('unit-price')).toBeVisible();
  const price1 = await page.getByTestId('unit-price').innerText();

  await page.goto('/');
  await expect(products.nth(1)).toBeVisible();
  await products.nth(1).click();
  await expect(page.getByTestId('unit-price')).toBeVisible();
  const price2 = await page.getByTestId('unit-price').innerText();

  expect(price1.trim()).not.toBe('');
  expect(price2.trim()).not.toBe('');
});
