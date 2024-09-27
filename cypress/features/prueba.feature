Feature: Move between pages

Background: Computer to the home page

Scenario: Fail login
    Given I am on ParaBank home page
    When I introduce wrong user name
    And  password
    And click on "LOG IN"
    Then The system displays error message

Scenario: Access About us
    Given I am on ParaBank home page
    When click on "About us"
    Then The system displays "About us" page