import type { ReporterDescription } from '@playwright/test';
import { LanguageEnum } from '../enums/LanguageEnum.js';
import { EnvironmentEnum } from '../enums/EnvironmentEnum.js';
import { BrowserEnum } from '../enums/BrowserEnum.js';

export const TIMEOUT = {
  DEFAULT: 5000,
  SHORT: 2000,
  LONG: 10000,
  XLONG: 30000
};

export const REPORTER: { reporter: ReporterDescription[] } = {
  reporter: [
    ['html', { open: 'always' }],
  ]
};

export const PLATFORM = {
  environment: (process.env.TEST_ENV as EnvironmentEnum) || EnvironmentEnum.DEV,
  language: process.env.LANG as LanguageEnum || LanguageEnum.EN,
  browser: (process.env.BROWSER as BrowserEnum) || BrowserEnum.CHROMIUM,
};

export const PROJECT = {
  Project: 'OrangeHRM'
};