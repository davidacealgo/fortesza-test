Feature: Send an invalid email to register menu
    As a user
    I want to send an invalid email in the register menu

Background:
    Given I navigate to "https://staging.fortesza.com"
    Given I click Register option
    Given I am on Register page
    And I click Inversionist option

Scenario Outline: Invalid email
    Given I enter an ivalid "<invalidEmail>" and "<password>"
    And I accept terms and conditions
    When I click continue button
    Then appears an error message of invalid email
    
Examples:
| password | invalidEmail |
| 12345678 | example@example |
| 123467 | @example.com |
