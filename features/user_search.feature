Feature: It's possible find another users
  To view another user user profile
  As an user
  I want to be able to search for users

  Scenario: Search for an specific user by name
    Given that I have signed in
    When I fill in the name in the search box
    And click in "Buscar"
    Then I should be redirected to the search user page
    And I should see the user profile card in the results

  Scenario: Search for an specific user by username
    Given that I have signed in
    When I fill in the username in the search box
    And click in "Buscar"
    Then I should be redirected to the search user page
    And I should see the user profile card in the results

  Scenario: Search for all users
    Given that I have signed in
    And I have two user profiles
    When I fill in the all users wildcard in the search box
    And click in "Buscar"
    Then I should be redirected to the search user page
    And I should see all users profile cards in the results

