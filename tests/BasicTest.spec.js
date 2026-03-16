const {test, expect}= require('@playwright/test');


test.only('MyFirstTestCase',async ({browser})=>{
    //Chrome 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('Shahan Gamage');
    await page.locator("[type='password']").fill('Shahan Gamage');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');


    });

test('MySecondTestCase',async ({browser,page})=>{
    //Chrome        
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(await page.title()).toBe('Google');
    });