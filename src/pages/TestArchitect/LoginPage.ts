import { Page } from '@playwright/test';
import { Login } from '../../locators/TestArchitect/Login.locator';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickLoginTA(): Promise<void> {
    await this.page.locator(Login.loginTAButton).click();
  }

  async enterEmail(email: string): Promise<void> {
    await this.page.locator(Login.emailAddressRegisterInput).fill(email);
  }

  async clickRegister(): Promise<void> {
    await this.page.locator(Login.emailRegisterButton).click();
  }

  async registerWithEmail(): Promise<void> {
    const randomEmail = `user${Date.now()}@example.com`;
    await this.enterEmail(randomEmail);
    await this.clickRegister();
  }
}