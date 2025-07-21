import { Login } from './../../locators/TestArchitect/Login.locator.js';

export class LoginPage {
  page;

  constructor(page) {
    this.page = page;
  }

  async clickLoginTA() {
    await this.page.locator(Login.loginTAButton).click();
  }

  async enterEmail(email) {
    await this.page.locator(Login.emailAddressRegisterInput).fill(email);
  }

  async clickRegister() {
    await this.page.locator(Login.emailRegisterButton).click();
  }
}