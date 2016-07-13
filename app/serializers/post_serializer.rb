class PostSerializer < ActiveModel::Serializer
  attributes :content, :timeAgoInWords
  has_one :user

  def timeAgoInWords
    time_ago_in_words object.created_at
  end
end
