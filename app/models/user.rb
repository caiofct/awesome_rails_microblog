class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :validatable, :confirmable

  mount_uploader :avatar, AvatarUploader

  validates :name, presence: true, length: { in: 3..255 }
  validates :username, presence: true, uniqueness: true, length: { in: 3..255 }
end
