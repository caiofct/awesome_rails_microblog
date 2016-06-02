When(/^I visit another user profile page$/) do
  visit user_profile_path(@another_user.username)
end

Then(/^the user must receive a notification email with the subject "([^"]*)"$/) do |subject|
  last_email.subject.match(/#{subject}/)
end

Then(/^I should not view the "([^"]*)" button$/) do |button_name|
  expect(page.has_content?(button_name)).not_to be true
end