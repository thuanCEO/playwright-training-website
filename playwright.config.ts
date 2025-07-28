import { defineConfig } from '@playwright/test';
import { TIMEOUT, REPORTER } from './src/config/Constants';
import { DRIVERS_CONFIG } from './src/config/DriverConfig'

export default defineConfig({
  testDir: DRIVERS_CONFIG.testDir,
  timeout: TIMEOUT.XLONG,
  retries: DRIVERS_CONFIG.retries,
  workers: DRIVERS_CONFIG.workers,
  expect: {
    timeout: TIMEOUT.DEFAULT,
  },
  reporter: REPORTER.reporter,
  name: DRIVERS_CONFIG.name,
  use: {
    browserName: DRIVERS_CONFIG.browserName,
    channel: DRIVERS_CONFIG.channel,
    headless: DRIVERS_CONFIG.headless,
    ignoreHTTPSErrors: DRIVERS_CONFIG.ignoreHTTPSErrors,
    screenshot: DRIVERS_CONFIG.screenshot,
    video: DRIVERS_CONFIG.video,
    trace: DRIVERS_CONFIG.trace,
  }
});
