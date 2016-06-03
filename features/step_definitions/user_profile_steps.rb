Given(/^I have two user profiles$/) do
  # We already have one user profile when signing in, so we just need another one
  @another_user = FactoryGirl.build(:user, username: Faker::Internet.user_name, email: Faker::Internet.email)
  @another_user.skip_confirmation!
  @another_user.save

  if @user.blank?
    @user = FactoryGirl.build(:user, username: Faker::Internet.user_name, email: Faker::Internet.email)
    @user.skip_confirmation!
    @user.save
  end
end

Given(/^I have many posts for each user$/) do
  10.times.each { FactoryGirl.create(:post, user: @user) }
  10.times.each { FactoryGirl.create(:post, user: @another_user) }
end

When(/^I visit the user profile page$/) do
  visit user_profile_path(@user.username)
end

When(/^I visit the user profile page of a non existing user$/) do
  visit user_profile_path(Faker::Internet.user_name)
end

Then(/^I should only see the user posts$/) do
  # the amount of posts in the page should be the same as the amount of posts in the user model
  expect(page.all(:css, ".posts div.post").length).to eq @user.posts.length
  page.all(:css, ".posts div.post").each do |post_element|
    expect(post_element.find(".username").text).to eq "@#{@user.username}"
  end
end

Then(/^the user profile info$/) do
  expect(page.find("#profile-name").text).to eq @user.name
  expect(page.find("#profile-username").text).to eq "@#{@user.username}"
end

When(/^I select an image$/) do
  within('form.edit_user') do
    attach_file(:user_avatar, File.join(Rails.root, '/spec/fixtures/images/olocobixo.jpg'))
    find("#send_avatar_btn").click
  end
end

When(/^I select a file that is not an image$/) do
  within('form.edit_user') do
    attach_file(:user_avatar, File.join(Rails.root, '/spec/fixtures/files/file.txt'))
    find("#send_avatar_btn").click
  end
end

Then(/^the user avatar image must be updated$/) do
  expect(File.basename(page.find(".profile-image").native.attributes["style"].value.match(/url\('([^"]*)'\)/)[1])).to eq "thumb_olocobixo.jpg"
end
