import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages';
import { LoginPage } from '../../pages/TestArchitect/LoginPage';
import { saveScreenshot } from '../../utils/saveScreenshot';

test.describe('@Smoke @BlogData', () => {
  test('@ViewBlogData Blog - View data', async ({ page }) => {
    const testArchitectPage = new TestArchitectPage(page);
    const loginPage = new LoginPage(page);
    await testArchitectPage.gotoAndClickLogin();
    await loginPage.registerWithEmail();
    

  });

   test('@CheckBlogData Blog - Check data protected in page', async ({ page }) => {
    const testArchitectPage = new TestArchitectPage(page);
    const loginPage = new LoginPage(page);
    await testArchitectPage.gotoAndClickLogin();
    await loginPage.registerWithEmail();

  });
});

