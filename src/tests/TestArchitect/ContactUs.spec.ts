import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages';
import { ContactFormUs } from '../../pages/TestArchitect/ContactFormUs';
import { SaveScreenshot } from '../../utils/saveScreenshot';
import { RegisterAccountTA } from '../../helpers/TestSetup';
import ContactUsData from '../../data/TestArchitect/ContactUs.json';

let page;
let context;
let contactFormUsPage: ContactFormUs;
let testArchitectPage: TestArchitectPage;

test.describe('@Smoke @ContactFormUs', () => {
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await RegisterAccountTA(browser);
        testArchitectPage = new TestArchitectPage(page);
        contactFormUsPage = new ContactFormUs(page);
    });

    test.afterAll(async () => {
        await context.close();
    });

    test('@CheckExistFormContact - Check exist form contact us data', async () => {
        await testArchitectPage.clickContactUsTab();
        await contactFormUsPage.scrollToReadMoreButton();
        await contactFormUsPage.checkContactUsFormTitleExists();
        await contactFormUsPage.checkSendMsgButtonExists();


        await SaveScreenshot(page);
    });

});

