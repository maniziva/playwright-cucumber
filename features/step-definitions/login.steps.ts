import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../support/world';

Given('I launch the application', async () => {
  await page.goto('https://example.com/login');
});

Then('I should see the login page', async () => {
  await expect(page.locator('h1')).toHaveText('Example Domain');
});