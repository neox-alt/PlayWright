
const {POManager} = require("../../tests/pageobjects/POManager");
const playwright = require('@playwright/test');

const {Before, After, BeforeStep, AfterStep,Status} = require("@cucumber/cucumber");

Before(async function() {
        const browser = await playwright.chromium.launch({headless : false} );  
        const context = await browser.newContext();
        this.page = await context.newPage();     
        this.poManager = new POManager(this.page);
});

BeforeStep(async function() {
    console.log("Before step hook");
});

AfterStep(async function({result}) {
    if(result.status === "FAILED"){
        await this.page.screenshot({path: `screenshot-${Date.now()}.png`});
    }
    console.log("After step hook");
}   );

After(async function() {
    await this.poManager.page.close();
    await this.poManager.page.context().browser().close();
    console.log("Test execution completed");
});
