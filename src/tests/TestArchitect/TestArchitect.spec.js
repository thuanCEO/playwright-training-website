import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages.js';
import { LoginPage } from '../../pages/TestArchitect/LoginPage.js';


test('Open', async ({ page }) => {
  const testArchitectPage = new TestArchitectPage(page);

  await testArchitectPage.goto();
  await testArchitectPage.clickAboutUs();

  await expect(page).toHaveURL(/about-us/);
});

test('Login - register with email', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://demo.testarchitect.com/my-account/');
  await loginPage.enterEmail('your_email@example.com');
  await loginPage.clickRegister();
 await page.waitForTimeout(10000); 
  await page.screenshot;
});