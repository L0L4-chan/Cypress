Feature:  Access to google

Scenario: Access to the search engine
    Given I am on google.es
    And the pop up block my access
    When click on "Reject"
    Then The system displays the home page