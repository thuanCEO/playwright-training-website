import { Page } from '@playwright/test';
import { GetLocator } from '../../utils/GetLocator';
import { orangeHrmUrl } from '../../utils/EnvConfig';
import { PROJECT } from '../../config/Constants';
import { ElementAction } from '../../elements/ElementAction'
import { ElementBase } from '../../elements/ElementBase'

export class LoginPageHRM extends ElementBase {

    private usernameElement = this.factory.getLocator(GetLocator.getLocator(this.PAGENAME, 'usernameInput'));
    private passwordElement = this.factory.getLocator(GetLocator.getLocator(this.PAGENAME, 'passwordInput'));
    private loginElement = this.factory.getLocator(GetLocator.getLocator(this.PAGENAME, 'loginButton'));


    constructor(page: Page) {
        super(page);
        this.page = page;
        const pageName = this.constructor.name;
    }

    private get PAGENAME(): string {
        return this.constructor.name;
    }

    async goto(): Promise<this> {
        await this.page.goto(orangeHrmUrl);
        return this;
    }

    async clickButtonLogin(): Promise<this> {
        await this.loginElement.click();
        return this;
    }

    async enterUserName(userName: string): Promise<this> {
        await this.usernameElement.fill(userName);
        return this;
    }

    async enterPassword(password: string): Promise<this> {
        await this.passwordElement.fill(password);
        return this;
    }

}