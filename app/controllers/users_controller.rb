class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show]
  before_action :set_user, only: [:show, :follow, :unfollow]

  # GET /users/show/:username
  def show
    @posts = Post.by_user_id(@user.id).order("created_at DESC")
  end

  # PUT /users
  # PUT /users.json
  def update
    @user = User.find params[:id]
    if @user.update(user_params)
      redirect_to user_profile_path(@user.username)
    else
      redirect_to user_profile_path(@user.username), error: "Não foi possível fazer upload da imagem. Por favor, tente novamente."
    end
  end

  # GET /user/:username/follow
  def follow
    if current_user.follow(@user)
      UserMailer.followed_by_user(@user, current_user).deliver
    end

    redirect_to user_profile_path(@user.username)
  end

  # GET /user/:username/unfollow
  def unfollow
    current_user.unfollow(@user)
    redirect_to user_profile_path(@user.username)
  end

  private

  # Avoiding repetitions and set`s a user before many actions
  def set_user
    @user = User.confirmed.by_username(params[:username]).first
    if @user.blank?
      render file: "public/404.html", status: 404
      return
    end
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:name, :avatar)
  end
end
