class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show]

  # GET /users/show/:username
  def show  
    @user = User.confirmed.by_username(params[:username])
    if @user.blank?
      render file: "public/404.html", status: 404
      return
    end
    @posts = Post.by_user_id(@user.id).order("created_at DESC")
  end

  # PUT /users
  # PUT /users.json
  def update
    @user = User.find params[:id]
    if @user.update(user_params)
      redirect_to user_profile_path(@user.username)
    else
      #TODO: show error when uploading the image
    end
  end

  private
  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:name, :avatar)
  end
end
