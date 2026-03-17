const {test, expect}= require('@playwright/test');


test.only('MyFirstTestCase',async ({browser})=>{
    //Chrome
    


    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username'); 
    const cardTitles = page.locator(".card-body a");
    const dropdown = page.locator('select.form-control');
    const radioBtnUser = page.locator('.radiotextsty').last();
    const popUpOkBtn = page.locator('#okayBtn');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('Learning@830$3mK2');
    await dropdown.selectOption("consult");
    //await page.pause();
    //await radioBtnUser.click();
    //await popUpOkBtn.click();
    //await page.pause();

    //Asertion to check the right button is selected
    await expect(radioBtnUser).toBeChecked();

    await page.locator('#signInBtn').click();
    // console.log(await page.locator("[style*='block']").textContent());
    // await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    // await userName.fill('');
    // await userName.fill('rahulshettyacademy');
    // await page.locator("[type='password']").fill('learning');
    // await page.locator('#signInBtn').click();
    //console.log(await page.locator("div[class*='card']").textContent());
    //await expect(page.locator("div[class*='card']").nth(0)).toContainText('ProtoCommerce');
    // console.log(await page.locator(".card-body a").first().textContent());
    await page.waitForLoadState('networkidle');
    //console.log(await page.locator(".card-body a").first().textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    });

test('MySecondTestCase',async ({browser,page})=>{
    //Chrome        
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(await page.title()).toBe('Google');
    });