class Following < ApplicationRecord
  belongs_to :user
  belongs_to :follower, class_name: "User"

  validates :user_id, presence: true, uniqueness: {scope: [:user_id, :follower_id]}
  validates :follower_id, presence: true, uniqueness: {scope: [:user_id, :follower_id]}

  validate :user_cant_follow_himself

  # Generates a custom json to be used in the react components
  def to_builder
    Jbuilder.new do |following|
      following.id self.user.id
      following.name self.user.name
      following.username self.user.username
    end
  end

  private

  def user_cant_follow_himself
    if self.user_id == self.follower_id
      errors.add(:user_id, "Usuário não pode seguir a si mesmo")
      errors.add(:follower_id, "Usuário não pode seguir a si mesmo")
      return false
    end

    true
  end
end
