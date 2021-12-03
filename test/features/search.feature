Feature: Search Google All
    "As a user I want to search google for all kinds of results, that want to find."

    Scenario: Searching for Fusion
        
        Given I am on the Google Search Page
        When I enter the text "Fusion" in the "#input" field
        And I hit the Return key
        Then I see results containing the text "Fusion" in their title or description

