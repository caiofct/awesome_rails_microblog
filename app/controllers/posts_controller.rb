class PostsController < ApplicationController

  # GET /posts/index
  def index
    @posts = Post.on_user_timeline(current_user.id).order("posts.created_at DESC")
    @posts = @posts.map{|post| post.to_builder(current_user).target! }.to_json
    @followed_users = Following.where("follower_id = ?", current_user.id).map{|user| user.to_builder.target! }
    @followed_users << Following.new(user: current_user).to_builder.target!
    @followed_users = @followed_users.to_json
    @post = Post.new
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)
    # setting the user_id in the post to be the id from signed_in user
    @post.user_id = current_user.id

    respond_to do |format|
      if @post.save
        ActionCable.server.broadcast 'posts', post: @post.to_builder(current_user).target!
        format.json { render json: @post, status: :created, location: posts_path }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:content, :user_id)
    end
end
