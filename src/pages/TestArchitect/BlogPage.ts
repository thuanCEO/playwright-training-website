import { Page } from '@playwright/test';
import { BlogLocators } from '../../locators/TestArchitect/Blog.locator';

export class BlogPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async clickChooseProtectHera(): Promise<void> {
        await this.page.locator(BlogLocators.protectedTitleButton).click();
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

}