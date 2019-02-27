@Regression
Feature: test-feature

  Background:
    When User navigates to the "ThinkMobiles" page with url "https://thinkmobiles.com"
    Then Page title is equal to "ThinkMobiles"

  Scenario: 1: QA
    When User clicks User clicks "Search button" "#headerSearchBar > form > button"


