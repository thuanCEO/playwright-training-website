import { test, expect } from '@playwright/test';
import { LoginPageHRM } from '../../pages/OrangeHRM/LoginPageHRM';
import { GetLocator } from '../../utils/GetLocator';

let page;
let context;
let loginPageHRM: LoginPageHRM;

test.describe.parallel('@Smoke @LoginPageHRM', () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        loginPageHRM = new LoginPageHRM(page);
    });

    test.afterAll(async () => {
        await context.close();
    });

    test('@LoginPageHRM Check exist blog data', async ({ page }) => {
        const loginPage = new LoginPageHRM(page); // truyền đúng Page
        await loginPage.goto();                   // this.page sẽ không undefined
    });

});