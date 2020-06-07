@tests
Feature: Test feature

  Scenario Outline: test scenario 1
    Given I call "<site>" api

    Examples:
      | site    |
      | google  |
      | youtube |

  Scenario: test scenario 2
    Given I search on google


