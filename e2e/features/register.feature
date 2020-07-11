Feature: Register a user in fortesza website
    As a user
    I want to register me in fortesza page

Background:
    Given I navigate to "https://staging.fortesza.com"

Scenario Outline: Register a new user
    Given I click Register option
    Given I am on Register page
    And I click Inversionist option
    When I enter "<email>" and "<password>"
    And I accept terms and conditions
    And I click on continue button
    And appears confirmation email message
    And I click Accept button
    And I enter confirmation code
    And I click confirm button
    Then user is created

Examples:
| url | email | password |
| https://staging.fortesza.com | fortesza-test@mailinator.com | 12345678 |