Feature: Search IMDB
    "As a user I want to be able to search for a wide range of movie related topics"

    Scenario: Searching for Actor

        "As a user I want to be able to search for a specific actor"

        Given I am on the IMDB website
        When I enter "Daniel Radcliffe" in the search bar
        And I press enter
        Then I see results matching "Daniel Radcliffe"

    Scenario: Search result dropdown

        "When i type in the search field, a dropdown appears"
        Given I am on the IMDB website
        When I enter a search parameter
        And The paramter is valid
        Then A dropdown with suggestions appear

    Scenario: Scenario name

        "The dropdown contains suggestions based on the search"
        Given I've entered a parameter in the searchbar
        When I choose a suggestion
        Then I can see its details