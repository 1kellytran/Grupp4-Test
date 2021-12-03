Feature: IMDB Navbar

    "As a User I can navigate the website using the navbar"

    Scenario: Menu button desktop

        "I can view the menu on desktop"

    Scenario: Menu button mobile

        "I can view the menu on mobile"
        Given I am on the IMDB website
        When I click on the menu button
        Then I see different menu categories

    Scenario: Menu close

        "I can close the menu again"
        Given I am in the menu on IMDB website
        When I click the close button
        Then The menu closes

    Scenario: Menu links

        "I can navigate to TV News from the menu"
        Given I am in the menu
        When I click on TV News
        Then I can view news related to TV

