import { defineConfig } from '@playwright/test';
import { TIMEOUT} from './src/config/constants';
export default defineConfig({
  testDir: './src/tests',
  timeout: TIMEOUT.XLONG,
  retries: 0,
  workers: 1,
  expect: {
    timeout: TIMEOUT.DEFAULT,
  },
  reporter: [['html', { open: 'always' }]],
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
      },
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
      },
    },
  ],
});
