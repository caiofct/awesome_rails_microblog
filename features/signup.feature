# encoding: utf-8
Feature: Sign up with a new account
  In order to login in the application
  As an user
  I want to be able to sign up for a new account

  Scenario: Must fill the sign_up form and confirm its account with success
    Given that I am on the sign_up page
    When I fill in all fields
    And click in "Criar Conta"
    Then a new user must be created
    And I should be redirected to the homepage
    And I should see the message "Uma mensagem com um link de confirmação foi enviada para o seu endereço de e-mail. Por favor, abra o link para confirmar a sua conta."
    And the user must receive a confirmation email
    And the user must be able to confirm its account and see the message "Sua conta foi confirmada com sucesso."
