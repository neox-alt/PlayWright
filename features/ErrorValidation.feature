Feature: Error validation

@Error



Scenario Outline: Scenario Outline name: Error login Validation
        Given a login to Ecommerce application with "<username>" and "<password>"
        Then Verify error message is displayed 

Examples:
| username          | password      |
|anshika@gmail.com  | Iamking@0     |
|Shahan             | Gamage        |
