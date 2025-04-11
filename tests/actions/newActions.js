import exp from "constants";
import locatorDua from "../locator/locatorDua";
import { expect, selectors } from "@playwright/test";

export default class newActions {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
        this.locatorDua = new locatorDua();
        this.selectdate = page.locator(this.locatorDua.datepicker);
        this.clickSubmit = page.locator(this.locatorDua.submit);
    }

    async goto() {
        await this.page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdUoJuxG1BTH3n3RGeewi97fOlVtPWrYZ4IlAr-lcGPL45vZg/viewform');
    }

    async fillChecklistDate(page) {
        const dateInput = Selector('#mG61Hd .whsOnd.zHQkBf');

        await t
        .click(Selector('.rFrNMe.yqQS1.hatWr.zKHdkd .aCsJod.oJeWuf'))
        .wait(6000)    
        .click(dateInput)
        .typeText(dateInput, '03/25/2025', { replace: true })  // Add this
        .wait(6000)
        .expect(dateInput.value).eql('03/25/2025');  // Now it should match

    // await t
    //     .click(Selector('#mG61Hd span').withText('Kirim').nth(1));
    }

    // async submit () {
    //     await this.clickSubmit.click();
    // }

}