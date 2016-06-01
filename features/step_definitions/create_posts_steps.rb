Given(/^I am on the posts page$/) do
  visit posts_path
end

When(/^I fill in the post content$/) do
  @post_content = Faker::Lorem.paragraph
  @posts_count = page.all(:css, ".posts div.post").length
  fill_in "post_content", with: @post_content
end

Then(/^I should see my new post on the top of the list of existing posts$/) do
  page.has_content?(@post_content)
  # The size of the posts list should increment by 1
  expect(page.all(:css, ".posts div.post").length).to eq @posts_count + 1
end

Then(/^I shouldn't see any post added to the list of existing posts$/) do
  # The size of the posts list shouldn't change
  expect(page.all(:css, ".posts div.post").length).to eq 0
end
