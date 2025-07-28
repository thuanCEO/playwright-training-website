import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages';
import { LoginPage } from '../../pages/TestArchitect/LoginPage';
import { SaveScreenshot } from '../../utils/SaveScreenshot';

test.describe('@Smoke @Register', () => {
  test('Login - register with email', async ({ page }) => {
    const testArchitectPage = new TestArchitectPage(page);
    await testArchitectPage.goto();
    await testArchitectPage.closePopupIfVisible();
    await testArchitectPage.clickLoginTA();
    const loginPage = new LoginPage(page);
    const randomEmail = `user${Date.now()}@example.com`;
    await loginPage.enterEmail(randomEmail);
    await loginPage.clickRegister();
    await page.waitForTimeout(10000);
    await SaveScreenshot(page);
  });
});

