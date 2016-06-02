Feature: View a user profile page and his posts
  I want to be able to view a user profile and his posts

  Scenario: Access the user profile page as a signed in user
    Given that I have signed in
    And I have two user profiles
    And I have many posts for each user
    When I visit the user profile page
    Then I should only see the user posts
    And the user profile info

  Scenario: Access the user profile page as an anonymous user
    Given I have two user profiles
    And I have many posts for each user
    When I visit the user profile page
    Then I should only see the user posts
    And the user profile info

  Scenario: Access the user profile of a non existing user
    Given I have two user profiles
    When I visit the user profile page of a non existing user
    Then I should see the message "Página não encontrada (404)"

  Scenario: Access the user profile and change it's avatar image
    Given that I have signed in
    When I visit the user profile page
    And I click in the "user_avatar_link" link
    And I select an image
    Then the user avatar image must be updated

  Scenario: Access the user profile and can`t change it's avatar image with non image files
    Given that I have signed in
    When I visit the user profile page
    And I click in the "user_avatar_link" link
    And I select a file that is not an image
    And I should see the message "Não foi possível fazer upload da imagem. Por favor, tente novamente."
