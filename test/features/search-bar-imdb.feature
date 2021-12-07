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
        When I've entered "Daniel Radcliffe" in the search bar
        Then A dropdown containing searchresults about "Daniel Radcliffe" appears



    Scenario: Select option from dropdown

        "The dropdown contains suggestions based on the search"

        Given I've entered "Daniel Radcliffe" in the searchbar
        When I choose a suggestion
        Then I can see details about "Daniel Radcliffe"