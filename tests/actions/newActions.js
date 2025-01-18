import exp from "constants";
import locatorDua from "../locator/locatordua";
import { expect } from "@playwright/test";

export default class newActions {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
        this.locatorDua = new locatorDua();
        this.inputUsername = page.locator(this.locatorDua.inputUsername);
        this.inputPassword = page.locator(this.locatorDua.inputPassword);
        this.clickButton = page.locator(this.locatorDua.clickButtonLogin);
        this.addtocartback = page.locator(this.locatorDua.addtocartback);
        this.addtocartJacket =  page.locator(this.locatorDua.addtocartJacket);
        this.listcart = page.locator(this.locatorDua.listcart);
        this.checkout = page.locator(this.locatorDua.checkout);
        this.inputFName = page.locator(this.locatorDua.inputFName);
        this.inputLName = page.locator(this.locatorDua.inputLName);
        this.inputPostalCode = page.locator(this.locatorDua.inputPostalCode);
        this.Continue = page.locator(this.locatorDua.Continue);
        this.Finish = page.locator(this.locatorDua.Finish);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login () {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButton.click();
    }

    async addToCart (){
        await this.addtocartback.click();
        await this.addtocartJacket.click();
        await this.listcart.click();
        await this.checkout.click();
    }

    async checkoutConfirm () {
        await this.inputFName.fill('Puspa');
        await expect(this.inputFName).toHaveValue('Puspa');
        await this.inputLName.fill('Tes');
        await expect(this.inputLName).toHaveValue('Tes');
        await this.inputPostalCode.fill('123456');
        await expect(this.inputPostalCode).toHaveValue('123456');
        await this.Continue.click();
        await this.Finish.click();
    }

}