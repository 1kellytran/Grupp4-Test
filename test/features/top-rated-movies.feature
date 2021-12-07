Feature: Top rated movies

    "As a user I want to be able to see the top rated movies"

    Scenario: Navigate to top movies

        "As a user I can view the top box office movies"

        Given I am on the IMDB site
        When I click on top box office
        Then I can see top box office movies

    Scenario: Navigate to top 250 movies

        "As a user I can view Top 250 movies"

        Given I am on the top box office page
        When I click on Top 250 in charts
        Then I can view IMDB Top 250 movies
    
     Scenario: Select by action movies

        "As a user I can only see action movies"

        Given I am on Top office page
        When I click on action in charts
        Then I can view action movies

  