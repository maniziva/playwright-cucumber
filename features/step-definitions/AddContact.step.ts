import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';

const baseURL = process.env.BASEURL;

Given('I navigate to the Contact List page', async function () {
  const page: Page = this.page;
  await page.goto(`${baseURL}contactList`);
  await expect(page.getByRole('heading', { name: 'Contact List' })).toBeVisible();
});

When('I click on {string}', async function (buttonText: string) {
  const page: Page = this.page;
  await page.getByRole('button', { name: buttonText }).click();
});

When('I fill the contact form with the following details:', async function (dataTable) {
  const page: Page = this.page;
  const contactData = dataTable.rowsHash();

  await page.getByPlaceholder('First Name').fill(contactData['First Name']);
  await page.getByPlaceholder('Last Name').fill(contactData['Last Name']);
  await page.getByPlaceholder('yyyy-MM-dd').fill(contactData['Birthdate']);
  await page.getByPlaceholder('example@email.com').fill(contactData['Email']);
  await page.getByPlaceholder('8005551234').fill(contactData['Phone']);
  await page.getByPlaceholder('Address 1').fill(contactData['Address1']);
  await page.getByPlaceholder('Address 2').fill(contactData['Address2']);
  await page.getByPlaceholder('City').fill(contactData['City']);
  await page.getByPlaceholder('State or Province').fill(contactData['State']);
  await page.getByPlaceholder('Postal Code').fill(contactData['Postal Code']);
  await page.getByPlaceholder('Country').fill(contactData['Country']);
});

When('I submit the form', async function () {
  const page: Page = this.page;
  await page.getByRole('button', { name: 'Submit' }).click();
});

Then('the contact should be added successfully', async function () {
  const page: Page = this.page;
  // You can enhance this by checking for confirmation message or redirection
  await expect(page.getByRole('button', { name: 'Add a New Contact' })).toBeVisible();
});