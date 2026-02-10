import { chromium, firefox, webkit, Browser, Page } from 'playwright';
import { Before, After, Status } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

let browser: Browser;
let page: Page;

Before(async function (this: CustomWorld) {
  const browserType = process.env.BROWSER || 'chromium';
  const isHeadless = process.env.HEADLESS === 'false';

  if (browserType === 'firefox') {
    this.browser = await firefox.launch({ headless: isHeadless });
  } 
  else if (browserType === 'webkit') {
    this.browser = await webkit.launch({ headless: isHeadless });
  } 
  else {
    this.browser = await chromium.launch({ headless: isHeadless });
  }

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

  // After(async function (scenario) {

  //   if (scenario.result?.status === 'FAILED') {
  //     const screenshotPath = `reports/screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
  //     await page.screenshot({ path: screenshotPath, fullPage: true });

  //     if (!this.attach) {
  //       console.warn('⚠️ this.attach is not available in After hook');
  //     } else {
  //       const img = fs.readFileSync(screenshotPath);
  //       this.attach(img, 'image/png');
  //     }
  //   }

  //   await page.close();
  //   await browser.close();
  // });

After(async function (scenario) {

    if (scenario.result?.status === Status.FAILED && this.page) {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, "image/png");
    }
   await this.page.close();
    await this.browser.close();
});
export { page };