class Api::FollowController < ApplicationController
    def create
        follow = Follower.new({follower_id: params[:id], author_id:  params[:id]})
        if follows.save
            render 'success'
        else 
            render 'failed'
        end
    end

    def destroy
        follow = Follower.find({follower_id: params[:id], author_id:  params[:id]})
        if follow
            follow.destroy
        end
    end

    private
    def follow_params
        params.require(:follow)
        .permit(:author_id, :follower_id)
    end
end
