import { expect, Page } from '@playwright/test';
import { randomChar } from '../../utils/randomData';
import { ContactFormUS } from '../../locators/TestArchitect/ContactUS.locator';
import { SaveScreenshot } from '../../utils/saveScreenshot';

export class ContactFormUs {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async clickSendMessage(): Promise<void> {
        await this.page.locator(ContactFormUS.submitSendMessageButton).click();
    }

    async scrollToReadMoreButton(): Promise<void> {
        await this.page.locator(ContactFormUS.contactFromTitle).scrollIntoViewIfNeeded();
    }

    async checkContactUsFormTitleExists(): Promise<void> {
        const message = this.page.locator(ContactFormUS.contactFromTitle);
        await expect(message).toBeVisible();
    }

    async checkContectUsTitleText(expectedText: string): Promise<void> {
        const actualText = await this.page.locator(ContactFormUS.contactFromTitle).textContent();
        expect(actualText?.trim()).toBe(expectedText);
    }

    async checkContectUsTitleDetailsText(expectedText: string): Promise<void> {
        const actualText = await this.page.locator(ContactFormUS.contactDetailsTitle).textContent();
        expect(actualText?.trim()).toBe(expectedText);
    }

    async checkSendMsgButtonExists(): Promise<void> {
        const button = this.page.locator(ContactFormUS.submitSendMessageButton);
        await expect(button).toBeVisible();
    }

    async checkMessageSentTextExists(): Promise<void> {
        const message = this.page.locator(ContactFormUS.messageSentText);
        await expect(message).toBeVisible();
    }

    async checkMessageSentTextContent(expectedText: string): Promise<void> {
        const actualText = await this.page.locator(ContactFormUS.messageSentText).textContent();
        expect(actualText?.trim()).toBe(expectedText);
    }

    async checkSupportCenterTextExists(): Promise<void> {
        const message = this.page.locator(ContactFormUS.supportCenterSpan);
        await expect(message).toBeVisible();
    }

    async checkSupportCenterContent(expectedText: string): Promise<void> {
        const actualText = await this.page.locator(ContactFormUS.supportCenterSpan).textContent();
        expect(actualText?.trim()).toBe(expectedText);
    }

    async fillContactUsRandomDataInput(): Promise<void> {
        await this.fillYourNameInput(randomChar(10));
        await this.fillYourEmailInput(`user${Date.now()}@example.com`);
        await this.fillSubjectInput(randomChar(10));
        await this.fillYourMessageInput(randomChar(30));
        console.log('Contact Us form filled with random data', this.fillContactUsRandomDataInput.name);
        await SaveScreenshot(this.page);
    }

    async fillYourNameInput(name: string): Promise<void> {
        const input = this.page.locator(ContactFormUS.yourNameInput);
        await input.fill(name);
    }

    async fillYourEmailInput(name: string): Promise<void> {
        const input = this.page.locator(ContactFormUS.yourEmailInput);
        await input.fill(name);
    }

    async fillSubjectInput(name: string): Promise<void> {
        const input = this.page.locator(ContactFormUS.subjectInput);
        await input.fill(name);
    }

    async fillYourMessageInput(name: string): Promise<void> {
        const input = this.page.locator(ContactFormUS.yourMessageInput);
        await input.fill(name);
    }

    async fillInputByXpath(xpath: string, value: string): Promise<void> {
        await this.page.locator(xpath).fill(value);
    }
}