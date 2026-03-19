const {test, expect}= require('@playwright/test');


test('MyFirstTestCase',async ({browser})=>{
    //Chrome
    


    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username'); 
    const cardTitles = page.locator(".card-body a");
    const dropdown = page.locator('select.form-control');
    const radioBtnUser = page.locator(".radiotextsty").last();
    const popUpOkBtn = page.locator('#okayBtn');
    const docLocator = page.locator("[href*='documents-request']");

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await userName.fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('Learning@830$3mK2');
    await dropdown.selectOption("consult");
    //await page.pause();
    await radioBtnUser.click();
    await popUpOkBtn.click();
    //await page.pause();

    //Asertion to check the right button is selected
    await expect(radioBtnUser).toBeChecked();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(docLocator).toHaveAttribute('class','blinkingText');

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

test('MySecondTestCase',async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
    const docLink = page.locator("[href*='documents-request']");

    const [page2] = await Promise.all([
    context.waitForEvent('page'),//listen for any new page to open 
    docLink.click(),
    ])
    const text = await page2.locator(".red").textContent();
    console.log(text);
    const arrayText1 = text.split('@')[1].split(' ')[0];
    console.log(arrayText1);
    await page.locator('#username').fill(arrayText1);
    await page.pause();

    //const userName = page.locator('#username');

    });