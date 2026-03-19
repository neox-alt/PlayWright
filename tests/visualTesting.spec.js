const {test, expect} = require('@playwright/test');

test.only('Visual Testing', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    expect (await page.screenshot()).toMatchSnapshot('SS.png');
    
})