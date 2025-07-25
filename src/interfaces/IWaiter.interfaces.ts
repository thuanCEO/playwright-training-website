import { Locator } from '@playwright/test';

export interface IWaiter {
  // ===== Generic Waits =====
  waitFor(timeoutSeconds?: number): Promise<void>;

  // ===== Visibility / Display =====
  waitForVisible(locator: Locator, timeoutMs?: number): Promise<void>;
  waitForHidden(locator: Locator, timeoutMs?: number): Promise<void>;
  waitForDetached(locator: Locator, timeoutMs?: number): Promise<void>;

  // ===== Enable / Disable =====
  waitForEnabled(locator: Locator, timeoutMs?: number): Promise<void>;
  waitForDisabled(locator: Locator, timeoutMs?: number): Promise<void>;

  // ===== Text & Value =====
  waitForText(locator: Locator, expectedText: string, timeoutMs?: number): Promise<void>;
  waitForContainsText(locator: Locator, expectedSubstring: string, timeoutMs?: number): Promise<void>;
  waitForValue(locator: Locator, expectedValue: string, timeoutMs?: number): Promise<void>;
  waitForContainsValue(locator: Locator, expectedSubstring: string, timeoutMs?: number): Promise<void>;

  // ===== Attribute & Class =====
  waitForAttribute(locator: Locator, attr: string, expectedValue: string, timeoutMs?: number): Promise<void>;
  waitForClassContains(locator: Locator, className: string, timeoutMs?: number): Promise<void>;

  // ===== Count / Element =====
  waitForCount(locator: Locator, expectedCount: number, timeoutMs?: number): Promise<void>;
  waitForElement(locator: Locator, expectedCount: number, timeoutMs?: number): Promise<void>;

  // ===== URL & Navigation =====
  waitForURL(urlPart: string, timeoutMs?: number): Promise<void>;
  waitForTitle(expectedTitle: string, timeoutMs?: number): Promise<void>;
  waitForTitleContains(partialTitle: string, timeoutMs?: number): Promise<void>;

  // ===== Focus / State =====
  waitForFocused(locator: Locator, timeoutMs?: number): Promise<void>;
  waitForChecked(locator: Locator, timeoutMs?: number): Promise<void>;
  waitForUnchecked(locator: Locator, timeoutMs?: number): Promise<void>;
}
