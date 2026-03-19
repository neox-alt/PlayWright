const {test, expect,request}= require('@playwright/test');

const {APiUtils} = require('./Utils/ApiUtils');

const loginpayload = {
    userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000"
};
const orderpayload = {
    orders: [
        { country : "India", productOrderedId : "6960eae1c941646b7a8b3ed3" }
    ]
};

let response;

test.beforeAll(async()=>{
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginpayload);
    response = await apiUtils.createOrder(orderpayload);

})

test ("placetheorder",async({page})=>{
    console.log(response.token);
    await page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    },response.token);
    await page.goto("https://rahulshettyacademy.com/client");
    await page.pause();
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    let count = await rows.count();
s
    for (let i = 0; i < count; ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }

    const orderId = await page.locator(".col-text").textContent();
    expect(orderId).includes(response.orderId);
    }


})
