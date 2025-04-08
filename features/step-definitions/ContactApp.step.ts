import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';

Given('I open the Contact List App', async function () {
  const page: Page = this.page;
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
  const page: Page = this.page;
  await page.locator('input#email').fill(username);
  await page.locator('input#password').fill(password);
  await page.getByRole('button', { name: 'Submit' }).click();
});

Then('I should see the heading {string}', async function (headingText: string) {
  const page: Page = this.page;
  await expect(page.getByRole('heading', { name: headingText })).toBeVisible();
});

When('I click the logout button', async function () {
  const page: Page = this.page;
  await page.getByRole('button', { name: 'Logout' }).click();
});

Then('I should be navigated back to the login page with heading {string}', async function (headingText: string) {
  const page: Page = this.page;
  await expect(page.getByRole('heading', { name: headingText })).toBeVisible();
});