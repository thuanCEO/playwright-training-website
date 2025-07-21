import { Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Lưu screenshot vào thư mục test-result/screenshot với tên file theo định dạng yyyymmdd hhmmsss.png
 */
export async function saveScreenshot(page: Page): Promise<string> {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const fileName = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())} ${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.png`;
  const dir = path.resolve('test-results/screenshot');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, fileName);
  await page.screenshot({ path: filePath });
  return filePath;
}