import { chromium, Browser, Page } from 'playwright';
import { BeforeAll, AfterAll } from '@cucumber/cucumber';
let browser: Browser;
export let page: Page;

BeforeAll(async () => {
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
});

AfterAll(async () => {
    await browser.close();
});
