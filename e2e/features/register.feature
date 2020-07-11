Feature: Register a user in fortesza website
    As a user
    I want to register in fortesza page

Background:
    Given I navigate to "https://staging.fortesza.com/"

Scenario Outline: Register a new user
    Given I launch "<url>"
    And I click Inversionist option
    And I enter "<email>" and "<password>"
    And I accept terms and conditions
    And I click on continue button
    And appears confirmation email message
    When I click Accept button
    And I enter confirmation code
    And I click confirm button
    Then user is created