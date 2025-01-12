// @ts-check
const { test, expect } = require('@playwright/test');

test('locator dan assertions', async ({page }) => {
    await page.goto('https://www.saucedemo.com/');

    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect (inputUsername).toHaveValue('standard_user');

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect (inputPassword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();
    const addtocartback = page.locator('#add-to-cart-sauce-labs-backpack');
    await addtocartback.click();

    const addtocartJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    await addtocartJacket.click();

    const listcart = page.locator('#shopping_cart_container > a');
    await listcart.click();

    const checkout = page.locator('#checkout');
    await checkout.click();

    const inputFName = page.locator('#first-name');
    await inputFName.fill('Puspa');
    await expect (inputFName).toHaveValue('Puspa');

    const inputLName = page.locator('#last-name');
    await inputLName.fill('Puspa123');
    await expect (inputLName).toHaveValue('Puspa123');

    const inputPostalCode = page.locator('#postal-code');
    await inputPostalCode.fill('12345');
    await expect (inputPostalCode).toHaveValue('12345');

    const Continue = page.locator('#continue');
    await Continue.click();

    const Finish = page.locator('#finish');
    await Finish.click();
});