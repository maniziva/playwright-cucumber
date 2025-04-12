import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';

// Given('I open the contact list page', async function () {
//   const page: Page = this.page;
//   await page.goto(`${process.env.BASEURL}contactList`);
// });

// Then('I click the Contact List heading', async function () {
//   const page: Page = this.page;
//   await page.getByRole('heading', { name: 'Contact List' }).click();
// });

// When('I select the first contact from the list', async function () {
//   const page: Page = this.page;
//   await page.locator('//*[@id="myTable"]/tr[1]').click();
// });

When('I click the Delete Contact button', async function () {
  const page: Page = this.page;

  // Attach listener before the action that triggers the dialog
  await page.getByRole('button', { name: 'Delete Contact' }).click();

  page.once('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept(); // Accepts the confirmation alert
  });

//   await page.getByRole('button', { name: 'Delete Contact' }).click();
});