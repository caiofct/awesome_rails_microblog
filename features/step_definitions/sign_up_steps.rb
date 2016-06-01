Given(/^that I am on the sign_up page$/) do
  visit new_user_registration_path
end

When(/^I fill in all fields$/) do
  password = Faker::Internet.password(8,20,true,true)
  @email = Faker::Internet.email
  fill_in "user_name", with: Faker::Internet.name
  fill_in "user_email", with: @email
  fill_in "user_username", with: Faker::Internet.user_name
  fill_in "user_password", with: password
  fill_in "user_password_confirmation", with: password
end

When(/^click in "([^"]*)"$/) do |button_name|
  find_button(button_name).click
end

Then(/^a new user must be created$/) do
  user = User.find_by_email(@email)
  expect(user).not_to be_nil
  expect(user.confirmation_token).not_to be_nil
end

Then(/^I should be redirected to the homepage$/) do
  expect(current_path).to eq(root_path)
end

Then(/^I should see the message "([^"]*)"$/) do |message|
  page.has_content?(message)
end

Then(/^the user must receive a confirmation email$/) do
  confirmation_token = last_email.body.match(/confirmation_token=([^"]+)/)
  user = User.find_by_email(@email)
  expect(user.confirmation_token).to eq(confirmation_token[1])
end

Then(/^the user must be able to confirm its account and see the message "([^"]*)"$/) do |message|
  confirmation_token = last_email.body.match(/confirmation_token=([^"]+)/)
  visit "/users/confirmation?#{confirmation_token[0]}"
  page.has_content?(message)
end
