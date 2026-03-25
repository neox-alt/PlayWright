const {When, Then, Given} = require("@cucumber/cucumber");
const{test,expect} = require("@playwright/test");
const {POManager} = require("../../tests/pageobjects/POManager");
const playwright = require('@playwright/test');



Given('a login to Ecommerce application {string} and {string}', {timeout: 100*1000},async function (username, password) {

           const products = this.page.locator(".card-body");
           const loginPage = this.poManager.getLoginPage();
           await loginPage.goTo();
           await loginPage.validLogin(username,password);

         }); 
         
         When('Add {string} to cart', async function (productName) {        
           // Write code here that turns the phrase above into concrete actions
            this.dashboardPage = this.poManager.getDashboardPage();
            await this.dashboardPage.searchProductAddCart(productName);
            await this.dashboardPage.navigateToCart();

         });

        Then('verify {string} is displayed in the cart',{timeout: 100*1000}, async function (productName) {
           // Write code here that turns the phrase above into concrete actions
            const cartPage = this.poManager.getCartPage();
            await cartPage.VerifyProductIsDisplayed(productName);   
            await cartPage.Checkout();
         });

         When('Enter valid details and place the order', async function () {
           // Write code here that turns the phrase above into concrete actions
            const ordersReviewPage = this.poManager.getOrdersReviewPage();
            await ordersReviewPage.searchCountryAndSelect("ind","India");
            this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
            console.log(this.orderId);
           
         });

        Then('Verify order is present in the Order history', async function () {
           // Write code here that turns the phrase above into concrete actions
            await this.dashboardPage.navigateToOrders();
            this.ordersHistoryPage = this.poManager.getOrdersHistoryPage();
            await this.ordersHistoryPage.searchOrderAndSelect(this.orderId);
            expect(this.orderId.includes(await this.ordersHistoryPage.getOrderId())).toBeTruthy();
           
         });

        Given('a login to Ecommerce application with {string} and {string}',{timeout: 100*1000}, async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
            await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
            const userName = this.page.locator('#username');
            await userName.fill(username);
            await this.page.locator("[type='password']").fill(password);
            await this.page.locator('#signInBtn').click();

         });


        Then('Verify error message is displayed',{timeout: 100*1000}, async function () { 
            await expect(this.page .locator("[style*='block']")).toContainText('Incorrect');
        
         });
