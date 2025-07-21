import { Page } from '@playwright/test';
import fs from 'fs';

import { testArchitectUrl } from '../../utils/envConfig.js';
import { ArchitectLocators } from '../../locators/TestArchitect/TestArchitectPage.locator.js';

export class TestArchitectPage {
  page;

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(testArchitectUrl);
  }

  async closePopupIfVisible() {
    const popupCloseBtn = this.page.locator('.pum-close');
    if (await popupCloseBtn.isVisible()) {
      await popupCloseBtn.click();
    }
  }
  
  async clickLoginTA() {
    await this.page.locator(ArchitectLocators.loginTAButton).click();
  }

  async clickAboutUs() {
     await this.page.locator(ArchitectLocators.aboutUsLink).click();
  }

  async getTitle() {
    return await this.page.title();
  }
}