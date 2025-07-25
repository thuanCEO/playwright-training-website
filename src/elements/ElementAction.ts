import { Locator, expect } from '@playwright/test';
import { IElementAction } from '../interfaces/IElementAction.interfaces';
import { TIMEOUT } from '../config/constants';

export class ElementAction implements IElementAction {
    private defaultTimeout = TIMEOUT.DEFAULT;
    private locator: Locator;

    constructor(locator: Locator) {
        this.locator = locator;
    }

    private convertToMs(seconds?: number): number | undefined {
        return seconds !== undefined ? seconds * 1000 : undefined;
    }

    async waitForVisible(timeoutSeconds?: number): Promise<void> {
        await this.locator.waitFor({
            state: 'visible',
            timeout: this.convertToMs(timeoutSeconds ?? this.defaultTimeout / 1000),
        });
    }

    async click(button?: string): Promise<void> {
        const normalized = button?.toLowerCase().trim();
        switch (normalized) {
            case undefined:
            case 'left':
                await this.locator.click();
                break;
            case 'right':
            case 'middle':
                await this.locator.click({ button: normalized as 'right' | 'middle' });
                break;
            default:
                throw new Error(`Unsupported mouse button: "${button}". Use 'left', 'right', or 'middle'.`);
        }
    }

    async dblClick(button?: string): Promise<void> {
        const normalized = button?.toLowerCase().trim();
        switch (normalized) {
            case undefined:
            case 'left':
                await this.locator.dblclick();
                break;
            case 'right':
            case 'middle':
                await this.locator.dblclick({ button: normalized as 'right' | 'middle' });
                break;
            default:
                throw new Error(`Unsupported mouse button: "${button}". Use 'left', 'right', or 'middle'.`);
        }
    }

    async rightClick(): Promise<void> {
        await this.click('right');
    }

    async hover(): Promise<void> {
        await this.locator.hover();
    }

    async fill(value: string): Promise<void> {
        await this.waitForVisible(10);
        await this.clear();
        await this.locator.fill(value);
    }

    async clear(): Promise<void> {
        await this.locator.fill('');
    }

    async type(text: string, delay?: number): Promise<void> {
        await this.waitForVisible(10);
        await this.locator.type(text, { delay });
    }

    async append(value: string): Promise<void> {
        await this.locator.type(value);
    }

    async press(key: string): Promise<void> {
        await this.locator.press(key);
    }

    async check(): Promise<void> {
        await this.locator.check();
    }

    async uncheck(): Promise<void> {
        await this.locator.uncheck();
    }

    async toggleCheck(): Promise<void> {
        const isChecked = await this.locator.isChecked();
        if (isChecked) {
            await this.locator.uncheck();
        } else {
            await this.locator.check();
        }
    }

    async focus(): Promise<void> {
        await this.locator.focus();
    }

    async blur(): Promise<void> {
        await this.locator.evaluate((el: any) => el.blur());
    }

    async uploadFile(filePath: string | string[]): Promise<void> {
        await this.locator.setInputFiles(filePath);
    }

    async dragTo(targetLocator: Locator): Promise<void> {
        await this.locator.dragTo(targetLocator);
    }

    async scrollIntoViewIfNeeded(): Promise<void> {
        await this.locator.scrollIntoViewIfNeeded();
    }
}
