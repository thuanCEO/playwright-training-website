import { expect, Page } from '@playwright/test';
import { BlogLocators, BlogDetailLocators } from '../../locators/TestArchitect/Blog.locator';

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

  async scrollToBottom() {
    await this.page.evaluate(() => {
      const element = document.querySelector('.some-class');
      return element ? element.scrollHeight : 0;
    });
  }

  async checkProtectedTitleText(expectedText: string): Promise<void> {
    const actualText = await this.page.locator(BlogLocators.protectedTitleButton).textContent();
    expect(actualText?.trim()).toBe(expectedText);
  }


  async checkProtectedButtonExists(): Promise<void> {
    const button = this.page.locator(BlogLocators.protectedTitleButton);
    await expect(button).toBeVisible();
  }

  async checkContinueButtonExists(): Promise<void> {
    const button = this.page.locator(BlogLocators.continueReadingButton);
    await expect(button).toBeVisible();
  }

  async isLastReadMoreVisible(): Promise<boolean> {
    const buttons = this.page.locator(BlogLocators.continueReadingButton);
    const count = await buttons.count();
    if (count === 0) return false;
    return await buttons.nth(count - 1).isVisible();
  }

  // Check the text of the protected details
  async checkProtectedTitleDetailsText(expectedText: string): Promise<void> {
    const actualText = await this.page.locator(BlogDetailLocators.titleBlogsSpan).textContent();
    expect(actualText?.trim().toUpperCase()).toBe(expectedText);
  }

  async checkProtectedDetailsText(expectedText: string): Promise<void> {
    const actualText = await this.page.locator(BlogDetailLocators.protectedDetailsText).textContent();
    expect(actualText?.trim()).toBe(expectedText);
  }

  async checkEnterButtonExists(): Promise<void> {
    const button = this.page.locator(BlogDetailLocators.enterButton);
    await expect(button).toBeVisible();
  }

  async clickEnterProtectHera(): Promise<void> {
    await this.page.locator(BlogDetailLocators.enterButton).click();
  }

}