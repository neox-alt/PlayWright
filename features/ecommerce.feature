Feature: Ecommerce Validations 


    Scenario: placing the order
        Given a login to Ecommerce application "anshika@gmail.com" and "Iamking@000"
        When Add "ZARA COAT 3" to cart
        Then verify "ZARA COAT 3" is displayed in the cart
        When Enter valid details and place the order
        Then Verify order is present in the Order history
