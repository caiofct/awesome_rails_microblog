When(/^I fill in the name in the search box$/) do
  fill_in "q", with: @user.name
end

When(/^I fill in the username in the search box$/) do
  fill_in "q", with: @user.username
end

Then(/^I should be redirected to the search user page$/) do
  expect(current_path).to eq search_users_path
end

Then(/^I should see the user profile card in the results$/) do
  expect(page.find("#profile-username").text).to eq "@#{@user.username}"
end

When(/^I fill in the all users wildcard in the search box$/) do
  fill_in "q", with: ":all"
end

Then(/^I should see all users profile cards in the results$/) do
  expect(page.all(:css, ".users-grid .user-grid-item").length).to eq User.count
end
