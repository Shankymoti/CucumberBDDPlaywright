import { Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';

import {Page, Browser, chromium, expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
setDefaultTimeout(60 * 1000 * 2)
// let browser :  Browser;
// let page : Page;
// let browserContext : any;

Given('User navigates to the application', async function () {
  // browser = await chromium.launch({headless: false});
  // browserContext = await browser.newContext();
  // page = await browserContext.newPage();
 

  // await page.goto('https://bookcart.azurewebsites.net/');
   await pageFixture.page.goto('https://naveenautomationlabs.com/opencart/')
});


Given('User click on the login link', async function () {
//await page.locator("//span[text()='Login']").click({force: true}); 
 //await page.getByRole('button', { name: 'Login' }).click(); 
//  await page.locator('text=Login').click();
// //span[text() = 'Login'] or span[contains[test(), 'Login']]

await pageFixture.page.getByTitle('My Account').click()
await pageFixture.page.locator("//a[text()='Login']").click()
});



Given('User enter the username as {string}', async function (username) {
  //await page.getByPlaceholder('Username').fill(username); // await page.locator('input[placeholder="Username"]').type(username);

  await pageFixture.page.getByPlaceholder('E-Mail Address').fill(username);
});


Given('User enter the password as {string}', async function (password) {
//await page.locator('input[placeholder="Password"]').fill(password);
await pageFixture.page.getByPlaceholder('Password').fill(password);
});


When('User click on the login button', async function () {
 //await page.locator('form >mat-card-actions > button').click();// await page.getByRole('button', { name: 'Login' }).click(); or await page.locator('text=Login').click();
 await pageFixture.page.locator("input[value='Login']").click()
});



Then('Login should be success', async function () {
//  const username = await page.locator("a[aria-haspopup='menu'] > span > span").innerText();
//  console.log("username is : "+username);
//  expect(username).toBe('ortoni11')
//  await expect(page.locator("a[aria-haspopup='menu'] > span > span")).toHaveText('ortoni11');
//  await browser.close();

await pageFixture.page.getByTitle('My Account').click()
const text = await pageFixture.page.locator("//ul[contains(@class,'dropdown-menu-right')]//li[last()]").innerText()
console.log(text);
await pageFixture.page.locator("//ul[contains(@class,'dropdown-menu-right')]//li[last()]").click()
});

When('Login should fail', async function () {
//  expect(page.url()).toBe('https://bookcart.azurewebsites.net/login');
//  await browser.close()
await expect(pageFixture.page.locator('.alert.alert-danger.alert-dismissible')).toBeVisible()

});

