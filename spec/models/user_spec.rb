require 'rails_helper'

RSpec.describe User, type: :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:user)).to be_valid
  end

  it "is invalid without a name" do
    expect(FactoryGirl.build(:user, name: nil)).not_to be_valid
  end

  it "is invalid without an email" do
    expect(FactoryGirl.build(:user, email: nil)).not_to be_valid
  end

  it "is invalid without a username" do
    expect(FactoryGirl.build(:user, username: nil)).not_to be_valid
  end

  it "is invalid without a password" do
    expect(FactoryGirl.build(:user, password: nil)).not_to be_valid
  end

  it "is invalid with the username as an email address" do
    expect(FactoryGirl.build(:user, username: Faker::Internet.email)).not_to be_valid
  end

  it "does not allow users with duplicated emails" do
    duplicated_email = Faker::Internet.email
    FactoryGirl.create(:user, email: duplicated_email)
    expect(FactoryGirl.build(:user, email: duplicated_email)).not_to be_valid
  end

  it "does not allow users with duplicated usernames" do
    duplicated_username = Faker::Internet.user_name
    FactoryGirl.create(:user, username: duplicated_username)
    expect(FactoryGirl.build(:user, username: duplicated_username)).not_to be_valid
  end

  it "finds user by login using email" do
    user_email = Faker::Internet.email
    warden_conditions = { login: user_email }
    user = FactoryGirl.create(:user, email: user_email)
    authenticated = User.find_for_database_authentication(warden_conditions)
    expect(authenticated).to eq user
  end

  it "finds user by login using username" do
    user_username = Faker::Internet.user_name.dup
    warden_conditions = { login: user_username }
    user = FactoryGirl.create(:user, username: user_username)
    authenticated = User.find_for_database_authentication(warden_conditions)
    expect(authenticated).to eq user
  end

  it "finds user by email" do
    user_email = Faker::Internet.email.dup
    warden_conditions = { email: user_email }
    user = FactoryGirl.create(:user, email: user_email)
    authenticated = User.find_for_database_authentication(warden_conditions)
    expect(authenticated).to eq user
  end
end
