const {test, expect} = require('@playwright/test');

test('Visual Testing', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    expect (await page.screenshot()).toMatchSnapshot('saucedemo.png');
    
})