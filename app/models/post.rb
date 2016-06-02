class Post < ApplicationRecord
  # The post has a user associated
  belongs_to :user

  # the user_id must be present
  validates :user_id, presence: true
  # you can`t create a post without a content
  validates :content, presence: true

  # Finds a post by an specific user
  scope :by_user_id, lambda { |user_id|  where('user_id' => user_id)}

  # Finds all the posts from the user and from the users he is following
  scope :on_user_timeline, lambda { |user_id| where("user_id IN (?) OR user_id = ?", Following.select(:user_id).where("follower_id = ?", user_id), user_id) }
end
