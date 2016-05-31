Feature: Create a post
  As a logged in user
  I want to be able to create a post

  Scenario: Must fill the post content and be able to add the post
    Given that I have signed in
    And I am on the posts page
    When I fill in the post content
    And click in "Postar"
    Then I should see the message "Postagem criada com sucesso!"
    And I should see my new post on the top of the list of existing posts
