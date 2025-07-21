import { Page } from '@playwright/test';
import fs from 'fs';

import { testArchitectUrl } from '../../utils/envConfig.js';

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

  async clickAboutUs() {
    await this.closePopupIfVisible();
    await this.page.click('a[href="/about-us/"]');
  }

  async getTitle() {
    return await this.page.title();
  }
}