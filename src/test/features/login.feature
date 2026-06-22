Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    # And User enter the username as "ortoni11"
    # And User enter the password as "Pass1234"
    And User enter the username as "shashank123test@abc.com"
    And User enter the password as "Password@123456"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    # Given User enter the username as "koushik"
    # Given User enter the password as "Passkoushik"
    Given User enter the username as "shashank123test@abc.com"
    Given User enter the password as "Password@12345"
    When User click on the login button
    But Login should fail