import { Page } from '@playwright/test';
import { testArchitectUrl } from '../../utils/envConfig';
import { ArchitectLocators } from '../../locators/TestArchitect/TestArchitectPage.locator';
import { ContactFormUs } from './ContactFormUs';
import { ShopPage } from './ShopPage';
import { BlogPage } from './BlogPage';

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

  async clickBlogTab(): Promise<BlogPage> {
    await this.page.locator(ArchitectLocators.blogTabLink).click();
    return new BlogPage(this.page);
  }

  async clickContactUsTab(): Promise<ContactFormUs> {
    await this.page.locator(ArchitectLocators.contactUsTabLink).click();
    return new ContactFormUs(this.page);
  }

  async clickOffersTab(): Promise<void> {
    await this.page.locator(ArchitectLocators.offersTabLink).click();
  }

  async clickShopTab(): Promise<ShopPage> {
    await this.page.locator(ArchitectLocators.shopTabLink).click();
    return new ShopPage(this.page);
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