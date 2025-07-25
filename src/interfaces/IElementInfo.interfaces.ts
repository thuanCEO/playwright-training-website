import { Locator } from '@playwright/test';

export interface IElementInfo {
  // ===== Click & Mouse actions =====
  clickElement(locator: Locator): Promise<void>;
  clickWithDelay(locator: Locator, delayMs?: number): Promise<void>;
  clickIfVisible(locator: Locator): Promise<void>;
  clickNth(locator: Locator, index: number): Promise<void>;
  doubleClick(locator: Locator): Promise<void>;
  rightClick(locator: Locator): Promise<void>;
  hoverOver(locator: Locator): Promise<void>;

  // ===== Keyboard & Input =====
  fillInput(locator: Locator, text: string): Promise<void>;
  appendInput(locator: Locator, text: string): Promise<void>;
  clearInput(locator: Locator): Promise<void>;
  pressKey(key: string): Promise<void>;

  // ===== Dropdowns / Checkboxes / File upload =====
  selectDropdownByLabel(locator: Locator, label: string): Promise<void>;
  checkCheckbox(locator: Locator): Promise<void>;
  uncheckCheckbox(locator: Locator): Promise<void>;
  uploadFile(locator: Locator, filePath: string): Promise<void>;

  // ===== Visibility & State Checks =====
  isVisible(locator: Locator, timeInMiliSeconds?: number): Promise<boolean>;
  isHidden(locator: Locator, timeInMiliSeconds?: number): Promise<boolean>;
  isEnabled(locator: Locator, timeInMiliSeconds?: number): Promise<boolean>;
  isDisabled(locator: Locator, timeInMiliSeconds?: number): Promise<boolean>;
  isChecked(locator: Locator, timeInMiliSeconds?: number): Promise<boolean>;
  isEditable(locator: Locator): Promise<boolean>;

  // ===== DOM Text & Attribute =====
  getText(locator: Locator): Promise<string>;
  getTextContent(locator: Locator): Promise<string | null>;
  getInnerText(locator: Locator): Promise<string>;
  getInnerHTML(locator: Locator): Promise<string>;
  getInputValue(locator: Locator): Promise<string>;
  getAttribute(locator: Locator, name: string): Promise<string | null>;
  getCssValue(locator: Locator, property: string): Promise<string>;

  // ===== DOM Navigation & Scrolling =====
  scrollIntoView(locator: Locator): Promise<void>;
  focus(locator: Locator): Promise<void>;
  blur(locator: Locator): Promise<void>;

  // ===== Element Count & Structure =====
  getCount(locator: Locator): Promise<number>;
  getChildElements(locator: Locator): Promise<Locator[]>;

  // ===== Advanced actions =====
  dragAndDrop(source: Locator, target: Locator): Promise<void>;
}
