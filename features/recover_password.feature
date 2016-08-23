Feature: Recover password for an existing account
  As an user
  When I forget my password
  I want to be able to recover it

  Scenario: Must fill the recover password form and be able to generate a new password
    Given that I am on the recover_password page
    When I fill in the email field
    And click in "Send"
    Then I should be redirected to the sign_in page
    And I should see the message "You will receive an email with instructions on how to reset your password in a few minutes."
    And I should receive a recover password email
    And I should be able to click in the recover password link on the email to got to the change password page
    And I should fill the recover password form with my new password
    And click in "Change password"
    And I should see the message "Your password has been changed successfully. You are now signed in."
    And the new password was really changed
