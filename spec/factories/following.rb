FactoryGirl.define do
  factory :following do
    association :user, factory: :user
    association :follower, factory: :user_with_avatar
  end
end
