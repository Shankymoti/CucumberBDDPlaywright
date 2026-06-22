import { Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';

import {Page, Browser, chromium, expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
setDefaultTimeout(60 * 1000 * 2)
When('user search for a {string}', async function (product) {
     //   await page.getByPlaceholder('Search books or authors').fill(string); 
        // await page.locator('input[placeholder="Search books or authors"]').type(string);

        await pageFixture.page.getByPlaceholder('Search').fill(product)
        await pageFixture.page.locator('.input-group-btn').click()
});

When('user add the book to the cart', async function () {
      await pageFixture.page.getByRole('button', {name: 'Add to Cart'}).click()
      await pageFixture.page.waitForLoadState()
      await pageFixture.page.waitForTimeout(2000);
});
       

Then('the cart badge should get updated', async function () {
   // await pageFixture.page.locator('cart-total')
     expect(await pageFixture.page.locator('#cart-total').innerText()).toContain('1 item(s)');
     await pageFixture.page.locator('#cart-total').click()
     await pageFixture.page.getByTitle('Remove').click()
});
       