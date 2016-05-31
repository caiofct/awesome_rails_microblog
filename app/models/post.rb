class Post < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :content, presence: true

  scope :by_user_id, lambda { |user_id|  where("user_id" => user_id)}
end
