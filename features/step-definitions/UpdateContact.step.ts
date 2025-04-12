import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';

Given('I open the contact list page', async function () {
  const page: Page = this.page;
  await page.goto(`https://thinking-tester-contact-list.herokuapp.com/contactList`);
});

Then('I click the Contact List heading', async function () {
  const page: Page = this.page;
  await page.getByRole('heading', { name: 'Contact List' }).click();
});

When('I select the first contact from the list', async function () {
  const page: Page = this.page;
  await page.locator('//*[@id="myTable"]/tr[1]').click();
});

When('I click the Edit Contact button', async function () {
  const page: Page = this.page;
  await page.getByRole('button', { name: 'Edit Contact' }).click();
});

When('I update the first name to {string}', async function (firstName: string) {
  const page: Page = this.page;
  await page.getByLabel('First Name:').fill(firstName);
});

When('I update the last name to {string}', async function (lastName: string) {
  const page: Page = this.page;
  await page.getByLabel('Last Name:').fill(lastName);
});

When('I update the country to {string}', async function (country: string) {
  const page: Page = this.page;
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill(country);
});

When('I submit the contact form', async function () {
  const page: Page = this.page;
  await page.getByRole('button', { name: 'Submit' }).click();
});

Then('I should be returned to the Contact List page', async function () {
  const page: Page = this.page;
  await page.getByRole('button', { name: 'Return to Contact List' }).click();
});