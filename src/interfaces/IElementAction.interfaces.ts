import { Locator } from '@playwright/test';

export interface IElementAction {
  // ===== Mouse Actions =====
  click(button?: 'left' | 'right' | 'middle'): Promise<void>;
  dblClick(button?: 'left' | 'right' | 'middle'): Promise<void>;
  hover(): Promise<void>;

  // ===== Keyboard Actions =====
  press(key: string): Promise<void>;
  type(text: string, delay?: number): Promise<void>;

  // ===== Input/Text Handling =====
  fill(value: string): Promise<void>;
  clear(): Promise<void>;
  append(value: string): Promise<void>;

  // ===== State / Checkbox / Radio =====
  check(): Promise<void>;
  uncheck(): Promise<void>;
  toggleCheck(): Promise<void>;

  // ===== Focus & Blur =====
  focus(): Promise<void>;
  blur(): Promise<void>;

  // ===== File Upload =====
  uploadFile(filePath: string | string[]): Promise<void>;

  // ===== Drag & Drop =====
  dragTo(targetLocator: Locator): Promise<void>;

  // ===== Visibility / Wait-like Actions =====
  scrollIntoViewIfNeeded(): Promise<void>;
}
