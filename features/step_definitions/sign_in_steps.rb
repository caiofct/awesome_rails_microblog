Given(/^that I am on the sign_in page$/) do
  visit new_user_session_path
end

When(/^I fill in my username and password$/) do
  @user = FactoryGirl.build(:user)
  @user.skip_confirmation!
  @user.save
  fill_in "user_login", with: @user.username
  fill_in "user_password", with: @user.password
end

When(/^I fill in my email and password$/) do
  @user = FactoryGirl.build(:user)
  @user.skip_confirmation!
  @user.save
  fill_in "user_login", with: @user.email
  fill_in "user_password", with: @user.password
end

Then(/^I should see the user name in the page$/) do
  page.has_content?(@user.name)
end

Then(/^the "([^"]*)" button to logout from the system$/) do |button_name|
  page.has_content?(button_name)
end
