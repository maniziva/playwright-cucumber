import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

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

When('I load contact data with id {string}', async function (contactId: string) {
    const raw = fs.readFileSync(path.join('test-data', 'contacts.json'), 'utf8');
    const allData = JSON.parse(raw);
    const found = allData.find((c: any) => c.id === contactId);
  
    if (!found) {
      throw new Error(`Contact data with id '${contactId}' not found.`);
    }
  
    this.contactData = found;
  });
  
  When('I fill the contact form with loaded data', async function () {
    const page = this.page;
    const contact = this.contactData;
  
    await page.getByPlaceholder('First Name').fill(contact['First Name']);
    await page.getByPlaceholder('Last Name').fill(contact['Last Name']);
    await page.getByPlaceholder('yyyy-MM-dd').fill(contact['Birthdate']);
    await page.getByPlaceholder('example@email.com').fill(contact['Email']);
    await page.getByPlaceholder('8005551234').fill(contact['Phone']);
    await page.getByPlaceholder('Address 1').fill(contact['Address1']);
    await page.getByPlaceholder('Address 2').fill(contact['Address2']);
    await page.getByPlaceholder('City').fill(contact['City']);
    await page.getByPlaceholder('State or Province').fill(contact['State']);
    await page.getByPlaceholder('Postal Code').fill(contact['Postal Code']);
    await page.getByPlaceholder('Country').fill(contact['Country']);
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