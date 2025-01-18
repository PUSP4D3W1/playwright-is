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
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login () {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButton();
    }

}