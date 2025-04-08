import { chromium, Browser, Page } from 'playwright';
import { Before, After } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  // Make it available to steps
  this.page = page;
});

After(async function (scenario) {

  if (scenario.result?.status === 'FAILED') {
    const screenshotPath = `reports/screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });

    if (!this.attach) {
      console.warn('⚠️ this.attach is not available in After hook');
    } else {
      const img = fs.readFileSync(screenshotPath);
      this.attach(img, 'image/png');
    }
  }

  await page.close();
  await browser.close();
});

export { page };