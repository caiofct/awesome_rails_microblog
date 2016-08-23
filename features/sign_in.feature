Feature: Sign in with an user account using the username or email
  To login in the application
  As an user
  I can use my username or email and password

  Scenario: Must fill the sign_in form with username and password and login with success
    Given that I am on the sign_in page
    When I fill in my username and password
    And click in "Sign in"
    Then I should see the user name in the page
    And the "Sign out" button to logout from the system

  Scenario: Must fill the sign_in form with email and password and login with success
    Given that I am on the sign_in page
    When I fill in my email and password
    And click in "Sign in"
    Then I should see the user name in the page
    And the "Sign out" button to logout from the system
