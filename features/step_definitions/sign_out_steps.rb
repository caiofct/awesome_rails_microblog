Given(/^that I have signed in$/) do
  step 'that I am on the sign_in page'
  step 'I fill in my username and password'
  step 'click in "Entrar"'
end

When(/^I click in the "Sair" link$/) do
  find_link("sign_out_link").click
end
