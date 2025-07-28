import { test, expect } from '@playwright/test';
import { LoginPageHRM } from '../../pages/OrangeHRM/LoginPageHRM';
import { UserData } from '../../data/OrangeHRM/UserData'
import { GetLocator } from '../../utils/GetLocator';
import { DataLoader } from '../../utils/DataLoader'
import { PROJECT } from '../../config/Constants'

let page;
let context;
let loginPageHRM: LoginPageHRM;

test.describe.parallel('@Smoke @LoginPageHRM', () => {
    test.beforeAll(async ({ browser }, projectInfo) => {
        context = await browser.newContext();
        const filePath = projectInfo.file;
        if (filePath.includes('OrangeHRM')) {
            PROJECT.Project = 'OrangeHRM';
        }
        const page = await context.newPage();
        loginPageHRM = new LoginPageHRM(page);
    });

    test.afterAll(async () => {
        await context.close();
    });

    test('LoginPageHRM ', async ({ page }) => {
        const loginPage = new LoginPageHRM(page);
        await loginPage.goto();
        const rawData = DataLoader.loadFileName('LoginData.json');
        UserData.initialize(rawData);
        console.log('rawData:', rawData);


        const admin = UserData.loadAndGetUser('LoginData.json', 'admin');
        console.log(admin.username);
        console.log(admin.password);
    });



});