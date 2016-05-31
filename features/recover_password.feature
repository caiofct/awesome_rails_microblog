Feature: Recover password for an existing account
  As an user
  When I forget my password
  I want to be able to recover it

  Scenario: Must fill the recover password form and be able to generate a new password
    Given that I am on the recover_password page
    When I fill in the email field
    And click in "Enviar"
    Then I should be redirected to the sign_in page
    And I should see the message "Dentro de minutos, você receberá um e-mail com instruções para a troca da sua senha."
    And I should receive a recover password email
    And I should be able to click in the recover password link on the email to got to the change password page
    And I should fill the recover password form with my new password
    And click in "Alterar senha"
    And I should see the message "Sua senha foi alterada com sucesso. Você está logado."
    And the new password was really changed
