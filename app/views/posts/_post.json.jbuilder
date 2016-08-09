json.(post, :id, :content) do
  json.timeAgoInWords time_ago_in_words(post.created_at)
  json.user do
    json.extract! post.user, :name, :username
    json.profileImage ''
  end
end
