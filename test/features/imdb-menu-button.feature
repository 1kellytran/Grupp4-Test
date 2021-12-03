Feature: Imdb menu button
    "As a User i want to be able to use the menu to navigate"

    Scenario: Pressing the menu button
        Given I am the IMDB site
        When I click the menu button
        Then I see the different categories

    
