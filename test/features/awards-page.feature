Feature: Awards page
    "As a User I want to be able to see the Oscar winners"

    Scenario: Get to Oscar page
        "As a User I want to access the Oscars page"
        Given I am on the IMDb homepage
        When I click on the menu bar
        And  I click the Oscars in Awards & Events
        Then I can see results relating to the Oscars ceremony 

    Scenario: View best motion picture
        "As a User I want to be able to see best motion picture"
        Given I am on the Oscars page
        When I click the Winners button
        Then I can see which movie won best motion picture

    Scenario: View actor in best motion picture
        "As a User I want to see details of an actor in the best motion picture"
        Given I am on the winners section on the Oscars page
        When I click on Frances McDormand in best motion pictures card
        Then I can see the actress' profile

    Scenario: Go back to IMDb homepage
        "As a User I want to go back to IMDb homepage by clicking on the logo"
        Given I am on the actress' profile page
        When I click the IMDb-logo on the top left of the page
        Then I will return to the IMDb homepage