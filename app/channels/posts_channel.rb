class PostsChannel < ApplicationCable::Channel
  def subscribed
    debugger
    stream_from 'posts'
  end
end
