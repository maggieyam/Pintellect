class Api::FollowController < ApplicationController
    def create
        follow = Follower.new({follower_id: params[:id], author_id:  params[:id]})
        if follows.save
            render "api/pins/show"
        else 
            render 'failed'
        end
    end

    def destroy
        follow = Follower.find({follower_id: params[:id], author_id:  params[:id]})
        if follow
            follow.destroy
            render "api/pins/show"
        end
    end

    private
    def follow_params
        params.require(:follow).permit(:author_id, :follower_id)
    end
end
