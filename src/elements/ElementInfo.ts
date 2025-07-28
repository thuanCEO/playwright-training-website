import { Page, Locator, expect } from '@playwright/test';
import { IElementInfo } from '../interfaces/IElementInfo.interfaces';
import { TIMEOUT } from '../config/Constants';

export class ElementInfo implements IElementInfo {
    constructor(private page: Page) { }
    private defaultTimeout = TIMEOUT.DEFAULT;

    async clickElement(locator: Locator): Promise<void> {
        await locator.click();
    }

    async clickWithDelay(locator: Locator, delayMs: number): Promise<void> {
        await this.page.waitForTimeout(delayMs);
        await locator.click();
    }

    async clickIfVisible(locator: Locator): Promise<void> {
        if (await locator.isVisible()) {
            await locator.click();
        }
    }

    async clickNth(locator: Locator, index: number): Promise<void> {
        await locator.nth(index).click();
    }

    async doubleClick(locator: Locator): Promise<void> {
        await locator.dblclick();
    }

    async rightClick(locator: Locator): Promise<void> {
        await locator.click({ button: 'right' });
    }

    async hoverOver(locator: Locator): Promise<void> {
        await locator.hover();
    }

    async fillInput(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    async appendInput(locator: Locator, text: string): Promise<void> {
        const currentValue = await locator.inputValue();
        await locator.fill(currentValue + text);
    }

    async clearInput(locator: Locator): Promise<void> {
        await locator.fill('');
    }

    async pressKey(key: string): Promise<void> {
        await this.page.keyboard.press(key);
    }

    async selectDropdownByLabel(locator: Locator, label: string): Promise<void> {
        await locator.selectOption({ label });
    }

    async checkCheckbox(locator: Locator): Promise<void> {
        if (!(await locator.isChecked())) {
            await locator.check();
        }
    }

    async uncheckCheckbox(locator: Locator): Promise<void> {
        if (await locator.isChecked()) {
            await locator.uncheck();
        }
    }

    async uploadFile(locator: Locator, filePath: string): Promise<void> {
        await locator.setInputFiles(filePath);
    }

    async isVisible(locator: Locator, timeInMiliSeconds: number = this.defaultTimeout): Promise<boolean> {
        try {
            await expect(locator).toBeVisible({ timeout: timeInMiliSeconds });
            return true;
        } catch {
            return false;
        }
    }

    async isHidden(locator: Locator, timeInMiliSeconds: number = this.defaultTimeout): Promise<boolean> {
        try {
            await expect(locator).toBeHidden({ timeout: timeInMiliSeconds });
            return true;
        } catch {
            return false;
        }
    }

    async isEnabled(locator: Locator, timeInMiliSeconds: number = this.defaultTimeout): Promise<boolean> {
        try {
            await expect(locator).toBeEnabled({ timeout: timeInMiliSeconds });
            return true;
        } catch {
            return false;
        }
    }

    async isDisabled(locator: Locator, timeInMiliSeconds: number = this.defaultTimeout): Promise<boolean> {
        try {
            await expect(locator).toBeDisabled({ timeout: timeInMiliSeconds });
            return true;
        } catch {
            return false;
        }
    }

    async isChecked(locator: Locator, timeInMiliSeconds: number = this.defaultTimeout): Promise<boolean> {
        try {
            await expect(locator).toBeChecked({ timeout: timeInMiliSeconds });
            return true;
        } catch {
            return false;
        }
    }

    async isEditable(locator: Locator): Promise<boolean> {
        return await locator.isEditable();
    }

    async getText(locator: Locator): Promise<string> {
        return await locator.textContent() ?? '';
    }

    async getTextContent(locator: Locator): Promise<string | null> {
        return await locator.textContent();
    }

    async getInnerText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }

    async getInnerHTML(locator: Locator): Promise<string> {
        return await locator.innerHTML();
    }

    async getInputValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    async getAttribute(locator: Locator, name: string): Promise<string | null> {
        return await locator.getAttribute(name);
    }

    async getCssValue(locator: Locator, property: string): Promise<string> {
        return await locator.evaluate((el, prop) => window.getComputedStyle(el).getPropertyValue(prop), property);
    }

    async scrollIntoView(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }

    async focus(locator: Locator): Promise<void> {
        await locator.focus();
    }

    async blur(locator: Locator): Promise<void> {
        await locator.evaluate(el => (el as HTMLElement).blur());
    }

    async getCount(locator: Locator): Promise<number> {
        return await locator.count();
    }

    async getChildElements(locator: Locator): Promise<Locator[]> {
        const count = await locator.count();
        const children: Locator[] = [];
        for (let i = 0; i < count; i++) {
            children.push(locator.nth(i));
        }
        return children;
    }

    async dragAndDrop(source: Locator, target: Locator): Promise<void> {
        await source.dragTo(target);
    }
}
