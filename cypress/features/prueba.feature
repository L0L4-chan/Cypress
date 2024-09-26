Feature: Move between pages

Background: Computer to the home page

Scenario: Access About us
    Given I am on ParaBank home page
    When click on "About us"
    Then The system displays "About us" page