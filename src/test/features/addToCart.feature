Feature: Add products to cart

  Background:
    Given User navigates to the application
    And User click on the login link


  Scenario Outline: Authenticated Users - Add to cart
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    And User click on the login button
    When user search for a "<book>"
    And user add the book to the cart
    Then the cart badge should get updated

    Examples:
      | username | password  | book            |
    #   | ortoni   | pass1234$ | Roomies         |
    #   | ortonikc | pass1234  | The Simple Wild |
        | shashank123test@abc.com   | Password@123456 | iphone         |
        | shashank123test3@abc.com | Password@123456  | HTC Touch HD |

#   @fail
#   Scenario: UnAuthenticated User - Add to cart
#     When user search for a "All of Us with Wings"
#     And user add the book to the cart
#     Then the cart badge should get updated