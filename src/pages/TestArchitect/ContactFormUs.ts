import { expect, Page } from '@playwright/test';
import { ContactFormUS } from '../../locators/TestArchitect/ContactUS.locator';

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
        expect(actualText?.trim().toUpperCase()).toBe(expectedText);
    }

    async checkContectUsTitleDetailsText(expectedText: string): Promise<void> {
        const actualText = await this.page.locator(ContactFormUS.contactDetailsTitle).textContent();
        expect(actualText?.trim().toUpperCase()).toBe(expectedText);
    }

    async checkSendMsgButtonExists(): Promise<void> {
        const button = this.page.locator(ContactFormUS.submitSendMessageButton);
        await expect(button).toBeVisible();
    }

    async checkMessageSentTextExists(): Promise<void> {
        const message = this.page.locator(ContactFormUS.messageSentText);
        await expect(message).toBeVisible();
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