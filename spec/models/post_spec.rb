require 'rails_helper'

RSpec.describe Post, type: :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:post)).to be_valid
  end

  it "is invalid without a content" do
    expect(FactoryGirl.build(:post, content: nil)).not_to be_valid
  end

  it "is invalid without an user" do
    expect(FactoryGirl.build(:post, user: nil)).not_to be_valid
  end
end
