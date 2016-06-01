Feature: Sign out from the application
  To sign out from the application
  As an user
  I should click in the sign out button and be redirected to the homepage

  Scenario: Must click in the sign_out button and be redirected to the homepage
    Given that I have signed in
    When I click in the "sign_out_link" link
    Then I should be redirected to the homepage
    And I should see the message "Saiu com sucesso."
