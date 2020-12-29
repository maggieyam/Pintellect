class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422       
    end
  end

  def update
    
    @user = User.find(params[:id])
    if @user.update(user_params)
      @boards = current_user.boards
      render "api/boards/index"
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :age, :first_name, :last_name, :username, :photo)
  end
end
