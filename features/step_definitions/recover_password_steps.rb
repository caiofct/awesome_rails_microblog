Given(/^that I am on the recover_password page$/) do
  visit new_user_password_path
end

When(/^I fill in the email field$/) do
  @user = FactoryGirl.build(:user)
  @user.skip_confirmation!
  @user.save

  fill_in "user_email", with: @user.email
end

Then(/^I should be redirected to the sign_in page$/) do
  expect(current_path).to eq new_user_session_path
end

Then(/^I should receive a recover password email$/) do
  expect(last_email.body.match("Forgot your password")).not_to be_blank
end

Then(/^I should be able to click in the recover password link on the email to got to the change password page$/) do
  @reset_password_token = last_email.body.match(/reset_password_token=([^"]+)/)
  visit "/users/password/edit?#{@reset_password_token[0]}"
end

Then(/^I should fill the recover password form with my new password$/) do
  @new_password = Faker::Internet.password(8, 20, true, true)
  fill_in "user_password", with: @new_password
  fill_in "user_password_confirmation", with: @new_password
end

Then(/^the new password was really changed$/) do
  expect(User.find_by_email(@user.email).valid_password?(@new_password)).to be true
end
