
const { defineConfig } = require('@playwright/test');

const isCI = !!process.env.CI;

module.exports = defineConfig({
  testDir: './tests',

  forbidOnly: isCI,
  retries: isCI ? 2 : 0,

  workers: isCI ? 2 : undefined,

  reporter: isCI
    ? [
        ['list'],
        ['junit', { outputFile: 'test-results/junit.xml' }],
        ['blob']
      ]
    : 'list',

  use: {
    baseURL: process.env.BASE_URL || 'https://practicesoftwaretesting.com',
    browserName: 'chromium',
    headless: true,
    testIdAttribute: 'data-test',
    trace: isCI ? 'retain-on-failure' : 'off',
    screenshot: isCI ? 'only-on-failure' : 'off',
    video: isCI ? 'retain-on-failure' : 'off'
  }
});
