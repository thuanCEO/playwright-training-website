import { Page } from '@playwright/test';
import { testArchitectUrl } from '../../utils/envConfig';
import { ArchitectLocators } from '../../locators/TestArchitect/TestArchitectPage.locator';

export class TestArchitectPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto(testArchitectUrl);
  }

  async closePopupIfVisible(): Promise<void> {
    const popupCloseBtns = this.page.locator(ArchitectLocators.popupCloseButton);
    const count = await popupCloseBtns.count();
    for (let i = 0; i < count; i++) {
      const button = popupCloseBtns.nth(i);
      if (await button.isVisible()) {
        await button.click();
      }
    }
  }

  async clickLoginTA(): Promise<void> {
    await this.page.locator(ArchitectLocators.loginTAButton).click();
  }

  async clickAboutUs(): Promise<void> {
    await this.page.locator(ArchitectLocators.aboutUsLink).click();
  }

  async clickBlogTab(): Promise<void> {
    await this.page.locator(ArchitectLocators.blogTabLink).click();
  }

  async clickContactUsTab(): Promise<void> {
    await this.page.locator(ArchitectLocators.contactUsTabLink).click();
  }

  async clickOffersTab(): Promise<void> {
    await this.page.locator(ArchitectLocators.offersTabLink).click();
  }

  async clickShopTab(): Promise<void> {
    await this.page.locator(ArchitectLocators.shopTabLink).click();
  }

  async clickAboutTab(): Promise<void> {
    await this.page.locator(ArchitectLocators.aboutTabLink).click();
  }

  async clickHomeTab(): Promise<void> {
    await this.page.locator(ArchitectLocators.homeTabLink).click();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
  
  async gotoAndClickLogin(): Promise<void> {
    await this.goto();
    await this.closePopupIfVisible();
    await this.clickLoginTA();
  }
}