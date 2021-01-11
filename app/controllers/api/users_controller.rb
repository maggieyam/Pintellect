class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      debugger
      login!(@user)
      render :show
    else
      debugger
      render json: @user.errors.full_messages, status: 422       
    end
  end

  def update  
    @user = User.find_by(id: params[:id])
    if @user 
      @user.update(user_params)          
      render :show
    end
  end

  private
  def user_params
    params.require(:user)
    .permit(:email, :password, :age, :first_name, :last_name, :username, :description, :url, :background, :location, :photo)
  end
end
