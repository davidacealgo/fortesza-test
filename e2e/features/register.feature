Feature: Register a user in fortesza website
    As a user
    I want to register me in fortesza page

Background:
    Given I navigate to "https://staging.fortesza.com"
    Given I click Register option
    Given I am on Register page
    And I click Inversionist option

Scenario Outline: Register a new user
    Given I enter "<email>" and "<password>"
    And I accept terms and conditions
    When I click on continue button
    And appears confirmation email message
    And I search confirmation code in my "<mailinatoremail>"
    And I set email confirmation code
    And I enter confirmation code
    And I click confirm button
    Then user is created

Examples:
| url | email | password | mailinator | mailinatoremail |
| https://staging.fortesza.com | fortesza-test98@mailinator.com | 12345678 | https://www.mailinator.com | fortesza-test98 |