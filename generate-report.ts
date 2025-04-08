// If you used a custom.d.ts, no @ts-ignore is needed
// @ts-ignore
import reporter from 'multiple-cucumber-html-reporter';

reporter.generate({
  jsonDir: 'reports', // Folder where cucumber_report.json is located
  reportPath: './reports/html', // Output folder for HTML report
  metadata: {
    browser: { name: 'chrome', version: 'latest' },
    device: 'Local test machine',
    platform: { name: 'windows', version: '11' },
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'Contact List App' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() }
    ]
  }
});