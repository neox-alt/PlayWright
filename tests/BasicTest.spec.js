const {test, expect}= require('@playwright/test');


test('MyFirstTestCase',async ({browser})=>{
    //Chrome 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');


    });

test('MySecondTestCase',async ({browser,page})=>{
    //Chrome        
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(await page.title()).toBe('Google');
    });