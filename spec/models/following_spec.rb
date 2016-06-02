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

  it "is invalid with user and follower as the same user reference" do
    pending
  end

  it "reflects in the users followers association when a follower is added" do
    pending
  end

  it "reflects in the users followeds association when a followed is added" do
    pending
  end
end
