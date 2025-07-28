import { Page } from '@playwright/test';
import { GetLocator } from '../../utils/GetLocator';
import { orangeHrmUrl } from '../../utils/EnvConfig';

export class LoginPageHRM {
    private page: Page;
    private usernameXpath = GetLocator.getLocator(this.PAGENAME, 'txtUsername');

    constructor(page: Page) {
        this.page = page;
    }
    private get PAGENAME(): string {
        return this.constructor.name;
    }

    async goto(): Promise<void> {
        await this.page.goto(orangeHrmUrl);
    }

}