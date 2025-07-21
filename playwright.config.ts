import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'always' }]],
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,
    // viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { browserName: 'chromium' },
  //   },
  // ],
});
