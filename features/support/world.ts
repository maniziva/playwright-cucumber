import { chromium, Browser, Page } from 'playwright';
import { Before, After } from '@cucumber/cucumber';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  // Make it available to steps
  this.page = page;
});

After(async function () {
  await page.close();
  await browser.close();
});

export { page };