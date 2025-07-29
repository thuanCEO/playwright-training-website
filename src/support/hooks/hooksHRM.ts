// src/hooks/hooks.ts

import { BeforeAll, AfterAll, Before } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { PROJECT } from '../../config/Constants';
import { PageWorld } from '../../support/world/PageWorld';

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000); // 60s timeout toàn bộ steps


setWorldConstructor(PageWorld);

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
});

Before(function (this: any) {
    const filePath = this.pickle?.uri || '';
    if (filePath.includes('OrangeHRM')) {
        PROJECT.Project = 'OrangeHRM';
    }

    this.browser = browser;
    this.context = context;
    this.page = page;
});

AfterAll(async () => {
    await context.close();
    await browser.close();
});
