Feature: An user can follow another user
  To view the posts of another user in my homepage
  As an user
  I want to be able to follow another user

  Scenario: Follow a user
    Given that I have signed in
    And I have two user profiles
    And I have many posts for each user
    When I visit another user profile page
    And I click in the "Seguir" link
    Then I should see the message "Deixar de seguir"
    And the user must receive a notification email with the subject "Você tem um novo seguidor"

  Scenario: Unfollow a user
    Given that I have signed in
    And I have two user profiles
    And I have many posts for each user
    When I visit another user profile page
    And I click in the "Seguir" link
    And I click in the "Deixar de seguir" link
    Then I should see the message "Seguir"

  Scenario: User cannot follow himself
    Given that I have signed in
    And I have two user profiles
    And I have many posts for each user
    When I visit the user profile page
    Then I should not view the "Seguir" button
