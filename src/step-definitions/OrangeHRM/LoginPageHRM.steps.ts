import { Given } from '@cucumber/cucumber';
import { LoginPageHRM } from '../../pages/OrangeHRM/LoginPageHRM';
import { UserData } from '../../data/OrangeHRM/UserData';
import { PageWorld } from '../../support/world/PageWorld';

Given('I login to OrangeHRM as admin', async function (this: PageWorld) {
    const user = UserData.loadAndGetUser('LoginData.json', 'admin');
    const loginPageHRM = new LoginPageHRM(this.page);

    await loginPageHRM.goto();
    await loginPageHRM.enterUserName(user.username);
    await loginPageHRM.enterPassword(user.password);
    await loginPageHRM.clickButtonLogin();
});
