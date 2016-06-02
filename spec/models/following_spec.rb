require 'rails_helper'

RSpec.describe Following, type: :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:following)).to be_valid
  end

  it "is invalid without a user" do
    expect(FactoryGirl.build(:following, user: nil)).not_to be_valid
  end

  it "is invalid without a follower" do
    expect(FactoryGirl.build(:following, follower: nil)).not_to be_valid
  end

  it "is invalid with user following himself" do
    user = FactoryGirl.create(:user)
    expect(FactoryGirl.build(:following, user: user, follower: user)).not_to be_valid
  end

  it "a user can`t follow the same user twice" do
    user = FactoryGirl.create(:user)
    another_user = FactoryGirl.create(:another_user)
    FactoryGirl.create(:following, user: user, follower: another_user)
    expect(FactoryGirl.build(:following, user: user, follower: another_user)).not_to be_valid
  end

  it "reflects in the users followers association when a follower is added" do
    user = FactoryGirl.create(:user)
    another_user = FactoryGirl.create(:another_user)

    FactoryGirl.create(:following, user: user, follower: another_user)
    expect(user.followers.first.id).to eq another_user.id
  end

  it "reflects in the users followeds association when a followed is added" do
    user = FactoryGirl.create(:user)
    another_user = FactoryGirl.create(:another_user)

    FactoryGirl.create(:following, user: another_user, follower: user)
    expect(user.followeds.first.id).to eq another_user.id
  end
end
