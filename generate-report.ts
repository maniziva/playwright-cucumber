


// @ts-ignore
import reporter from 'multiple-cucumber-html-reporter';
import fs from 'fs';
import os from 'os';

const platformName = "MacOS Sequoia"; // 'darwin', 'win32', 'linux'
const platformVersion = "15.4"; // e.g., '22.3.0' (macOS Ventura), '10.0.19045' (Windows 11)

let startTime: Date;

try {
  const rawStart = fs.readFileSync('reports/start-time.txt', 'utf8');
  startTime = new Date(rawStart);
} catch (err) {
  console.warn('⚠️ Could not read start-time.txt, using current time as fallback.');
  startTime = new Date();
}

const endTime = new Date();

reporter.generate({
  jsonDir: 'reports', // Folder where cucumber_report.json is located
  reportPath: './reports/html', // Output folder for HTML report
  metadata: {
    browser: { name: 'chrome', version: 'latest' }, // You can make this dynamic too if needed
    device: os.hostname(), // Machine name
    platform: {
      name: "macOS",
      version: platformVersion,
    },
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'Contact List App' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Start Time', value: startTime.toLocaleString() },
      { label: 'End Time', value: endTime.toLocaleString() },
        { label: 'OS Platform', value: platformName },
      { label: 'OS Version', value: platformVersion },
      { label: 'Host', value: os.hostname() },
    ],
  },
});
