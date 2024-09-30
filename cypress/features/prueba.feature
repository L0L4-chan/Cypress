Feature: Move between pages

Background: Computer to the home page

Scenario: Fail login
    Given I am on ParaBank home page
    When I introduce wrong user name
    And  password
    And click on "LOG IN"
    Then The system displays error message

Scenario: Request login info 
    Given I am on ParaBank home page
    When I click on "Forgot login info"
    Then The system displays a form to fill

Scenario: Send request info without filling the fields
    Given I am on the "Customer lookup" page    
    When I click on "Find my Login info"
    Then Required info warning is shown

Scenario: Access About us
    Given I am on ParaBank home page
    When click on "About us"
    Then The system displays "About us" page