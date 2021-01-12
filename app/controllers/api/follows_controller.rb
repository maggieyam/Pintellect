class Api::FollowsController < ApplicationController
    before_action :logged_in?
    def create
        follow = Follow.new({author_id:  params[:author_id], follower_id: params[:follower_id]})
                  
        if follow.save!           
            # @pin = Pin.find(params[:pin_id])
            @user = User.find(params[:author_id])
            render "api/users/show"
        else 
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        follow = Follow.find_by({author_id:  params[:author_id], follower_id: params[:follower_id]})
        if follow           
            # @pin = Pin.find(params[:pin_id])
            @user = User.find(params[:author_id])
            follow.destroy
            render "api/users/show"
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end
end
