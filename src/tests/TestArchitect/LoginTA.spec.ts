import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages';
import { LoginPage } from '../../pages/TestArchitect/LoginPage';
import { saveScreenshot } from '../../utils/saveScreenshot';

test('@LoginTA Login - register with email', async ({ page }) => {
  const testArchitectPage = new TestArchitectPage(page);
  await testArchitectPage.goto();
  await testArchitectPage.clickAboutUs();
  await page.waitForTimeout(10000);
  await saveScreenshot(page);
  await testArchitectPage.clickLoginTA();

  const loginPage = new LoginPage(page);
  const randomEmail = `user${Date.now()}@example.com`;
  await loginPage.enterEmail(randomEmail);
  await loginPage.clickRegister();
  await page.waitForTimeout(10000);
  await saveScreenshot(page);
});