// @ts-ignore
import reporter from 'multiple-cucumber-html-reporter';
import fs from 'fs';
import os from 'os';
import { chromium } from 'playwright';

async function getChromeVersion(): Promise<string> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const userAgent = await page.evaluate(() => navigator.userAgent);
    await browser.close();

    const match = userAgent.match(/Chrome\/([\d.]+)/);
    return match ? match[1] : 'unknown';
}

// 🔁 Map internal platform names to readable ones
function getPlatformName(): string {
    const platform = os.platform();
    switch (platform) {
        case 'darwin':
            return 'macOS';
        case 'win32':
            return 'Windows';
        case 'linux':
            return 'Linux';
        default:
            return platform; // fallback to raw value
    }
}
const platformName = getPlatformName();
const platformVersion = os.release(); // e.g. 14.4.0 or 10.0.19045

let startTime: Date;

try {
    const rawStart = fs.readFileSync('reports/start-time.txt', 'utf8');
    startTime = new Date(rawStart);
} catch (err) {
    console.warn('⚠️ Could not read start-time.txt, using current time as fallback.');
    startTime = new Date();
}

const endTime = new Date();

(async () => {
    const chromeVersion = await getChromeVersion();

    reporter.generate({
        jsonDir: 'reports',
        reportPath: './reports/html',
        metadata: {
            browser: { name: 'chrome', version: chromeVersion },
            device: os.hostname(),
            platform: {
                name: platformName,
                version: platformVersion,
            },
        },
        customData: {
            title: '📋 Test Execution Summary',
            data: [
                { label: 'Project', value: 'Contact List App' },
                { label: 'Release', value: '1.0.0' },
                { label: 'Start Time', value: startTime.toLocaleString() },
                { label: 'End Time', value: endTime.toLocaleString() },
                {
                    label: 'Duration',
                    value: `${Math.floor((endTime.getTime() - startTime.getTime()) / 60000)} min ${Math.round(((endTime.getTime() - startTime.getTime()) % 60000) / 1000)} sec`
                },
                { label: 'OS Platform', value: platformName },
                { label: 'Host', value: os.hostname() },
            ],
        },
    });
})();
