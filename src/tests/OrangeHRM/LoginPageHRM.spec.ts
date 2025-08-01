import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPageHRM } from '../../pages/OrangeHRM/LoginPageHRM';
import { UserData } from '../../data/OrangeHRM/UserData'
import { GetLocator } from '../../utils/GetLocator';
import { DataLoader } from '../../utils/DataLoader'
import { PROJECT } from '../../config/Constants'
import { SaveScreenshot } from '../../utils/SaveScreenshot';

let context: BrowserContext;
let page: Page;
let loginPageHRM: LoginPageHRM;

test.describe.parallel('@Smoke @LoginPageHRM', () => {
    test.beforeAll(async ({ browser }, projectInfo) => {
        context = await browser.newContext();
        page = await context.newPage();

        const filePath = projectInfo.file;
        if (filePath.includes('OrangeHRM')) {
            PROJECT.Project = 'OrangeHRM';
        }

        loginPageHRM = new LoginPageHRM(page);
    });

    test.afterAll(async () => {
        await context.close();
    });

    test('Login Page OrangeHRM', async ({ page }) => {
        const userData = UserData.loadAndGetUser('LoginData.json', 'admin');

        (await (await (await loginPageHRM.goto())
            .enterUserName(userData.username))
            .enterPassword(userData.password))
            .clickButtonLogin();

        await SaveScreenshot(page);
    });
});