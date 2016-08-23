Feature: Sign up with a new account
  In order to login in the application
  As an user
  I want to be able to sign up for a new account

  Scenario: Must fill the sign_up form and confirm its account with success
    Given that I am on the sign_up page
    When I fill in all fields
    And click in "Sign up"
    Then a new user must be created
    And I should be redirected to the homepage
    And I should see the message "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account."
    And the user must receive a confirmation email
    And the user must be able to confirm its account and see the message "Your email address has been successfully confirmed."
