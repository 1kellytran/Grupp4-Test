Feature: Awards page
    "As a User I want to be able to see the Oscar winners"

    Scenario: Get to Oscar
        "As a User I want to access the Oscars page"
        Given I am on the IMDB website menu
        And I click the Oscars in Awards & Events
        # Kan vara 2 steg
        Then I can see results relating to the Oscars ceremony 

    Scenario: View best motion picture
        "As a User I want to be able to see best motion picture"
        Given I am on the Oscars page
        When I click the Winners button
        Then I can see which movie won best motion picture

    Scenario: View actor in best motion picture
        "I can see details of an actor in the best motion picture"
        Given I am on the winners section on the Oscars page
        When I click an actors name in best motion pictures card
        Then I can see the actors profile