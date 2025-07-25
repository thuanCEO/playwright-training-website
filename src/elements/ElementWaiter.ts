import { expect, Locator, Page } from '@playwright/test';
import { IWaiter } from '../interfaces/IWaiter.interfaces';
import { TIMEOUT } from '../config/constants';

export class ElementWaiter implements IWaiter {
  private defaultTimeout = TIMEOUT.DEFAULT;

  constructor(private page: Page) {}

  // ------------------ PAGE LEVEL ------------------

  async waitForTitle(expectedTitle: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitle, { timeout: timeoutMs });
  }

  async waitForTitleContains(partialTitle: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(partialTitle), { timeout: timeoutMs });
  }

  async waitForURL(urlPart: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(urlPart), { timeout: timeoutMs });
  }

  async waitFor(timeoutSeconds: number = 1): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, timeoutSeconds * 1000));
  }

  // ------------------ ELEMENT STATE ------------------

  async waitForVisible(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeVisible({ timeout: timeoutMs });
  }

  async waitForHidden(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeHidden({ timeout: timeoutMs });
  }

  async waitForDetached(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await locator.waitFor({ state: 'detached', timeout: timeoutMs });
  }

  async waitForEnabled(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeEnabled({ timeout: timeoutMs });
  }

  async waitForDisabled(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeDisabled({ timeout: timeoutMs });
  }

  async waitForFocused(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeFocused({ timeout: timeoutMs });
  }

  async waitForChecked(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeChecked({ timeout: timeoutMs });
  }

  async waitForUnchecked(locator: Locator, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).not.toBeChecked({ timeout: timeoutMs });
  }

  // ------------------ TEXT / VALUE / ATTRIBUTE ------------------

  async waitForText(locator: Locator, expectedText: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toHaveText(expectedText, { timeout: timeoutMs });
  }

  async waitForContainsText(locator: Locator, expectedSubstring: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toContainText(expectedSubstring, { timeout: timeoutMs });
  }

  async waitForValue(locator: Locator, expectedValue: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toHaveValue(expectedValue, { timeout: timeoutMs });
  }

  async waitForContainsValue(locator: Locator, expectedSubstring: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toHaveValue(new RegExp(expectedSubstring), { timeout: timeoutMs });
  }

  async waitForAttribute(locator: Locator, attr: string, expectedValue: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toHaveAttribute(attr, expectedValue, { timeout: timeoutMs });
  }

  // ------------------ CLASS / COUNT ------------------

  async waitForClassContains(locator: Locator, className: string, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toHaveClass(new RegExp(className), { timeout: timeoutMs });
  }

  async waitForCount(locator: Locator, expectedCount: number, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await expect(locator).toHaveCount(expectedCount, { timeout: timeoutMs });
  }

  async waitForElement(locator: Locator, expectedCount: number, timeoutMs: number = this.defaultTimeout): Promise<void> {
    await this.waitForCount(locator, expectedCount, timeoutMs);
  }
}
