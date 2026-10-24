const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    browserName: 'chromium',
    headless: true,
    testIdAttribute: 'data-test'
  }
});
