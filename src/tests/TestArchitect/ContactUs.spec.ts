import { test, expect } from '@playwright/test';
import { TestArchitectPage } from '../../pages/TestArchitect/ArchitectPages';
import { ContactFormUs } from '../../pages/TestArchitect/ContactFormUs';
import { SaveScreenshot } from '../../utils/SaveScreenshot';
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
        //1. Navigate to the Test Architect page
        await testArchitectPage.clickContactUsTab()
        //2. Check the title of the Contact Form
        await contactFormUsPage.scrollToReadMoreButton();
        await contactFormUsPage.checkContactUsFormTitleExists();
        await contactFormUsPage.checkSendMsgButtonExists();
        //3. Check the text of the Contact Form title
        await contactFormUsPage.checkContectUsTitleText(ContactUsData.ContactUsArchitect.contactFormTitleText);
        await contactFormUsPage.checkContectUsTitleDetailsText(ContactUsData.ContactUsArchitect.contectDetailsText);
        //4. Check the visibility of the Contact Form elements
        await contactFormUsPage.checkSupportCenterTextExists();
        //5. Check the text of the Support Center
        await contactFormUsPage.checkSupportCenterContent(ContactUsData.ContactUsArchitect.supportCenterText);
        //6. Check the visibility of the Send Message button
        await contactFormUsPage.fillContactUsRandomDataInput();
        //7. Click the Send Message button
        await contactFormUsPage.clickSendMessage();
        //8. Check the visibility of the message sent text
        await contactFormUsPage.checkMessageSentTextExists();
        //9. Check the content of the message sent text
        await contactFormUsPage.checkMessageSentTextContent(ContactUsData.ContactUsArchitect.contactSendMessages);
        //9. Take a screenshot of the Contact Us page
        await SaveScreenshot(page);
    });
});

