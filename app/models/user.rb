class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :validatable, :confirmable
  # An user has many posts
  has_many :posts, dependent: :destroy
  # Mapping the relationships for Followers and Followeds
  has_many :followings
  has_many :followerships, class_name: 'Following', foreign_key: 'user_id'
  has_many :followedships, class_name: 'Following', foreign_key: 'follower_id'
  has_many :followers, through: :followerships, source: :follower
  has_many :followeds, through: :followedships, source: :user
  # The user avatar property is a Carrierwave Uploader wich supports only images
  mount_uploader :avatar, AvatarUploader
  # Virtual attribute for authenticating by either username or email
  # This is in addition to a real persisted field like 'username'
  attr_accessor :login

  validates :name, presence: true, length: { in: 3..255 }
  # The username is case insensitive, i.e., Caiofct is the same as caiofct
  validates :username, presence: true, uniqueness: {
    :case_sensitive => false
  }, length: { in: 3..255 }

  # Only allow letter, number, underscore and punctuation for the username.
  # Avoid the problem with a username with an email format
  validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, multiline: true

  # Finds an specific user by username
  scope :by_username, lambda { |username| where("username" => username) }
  # Finds all confirmed users
  scope :confirmed, lambda { where("confirmed_at IS NOT NULL") }

  # To determine whether a user can follow another, we have some pre-requisites:
  # 1. The user to be followed can`t be the same user that wants to follow him (A user cannot follow himself)
  # 2. The user to be followed can`t be followed yet by the user (You cannot have duplicates between a follower and followed pair)
  def can_follow?(user)
    if self.id == user.id || following?(user)
      return false
    end
    true
  end

  # Verifying whether a user is following another one
  def following?(user)
    followed = Following.find_by_follower_id_and_user_id(self.id, user.id)
    return false if followed.blank?
    true
  end

  # Adds the user in parameter to the list of followeds of the instance user
  def follow(user)
    self.followeds << user
  end

  # Removes the user in the parameter from the Followings table where the
  # instance user is in the follower_id and the parameter user is in the user_id
  def unfollow(user)
    followed = Following.find_by_follower_id_and_user_id(self.id, user.id)
    if !followed.blank?
      followed.destroy
    end
  end

  # Overrinding the devise's logic to lookup a user in the database to use
  # the username or email
  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_hash).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    elsif conditions.has_key?(:username) || conditions.has_key?(:email)
      conditions[:email].dup.downcase! if conditions[:email]
      conditions[:username].dup.downcase! if conditions[:username]
      where(conditions.to_hash).first
    end
  end
end
