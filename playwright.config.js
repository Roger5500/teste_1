const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  workers: 2,

  timeout: 30000,

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  reporter: [
    ['list'],
    ['html']
  ]
});