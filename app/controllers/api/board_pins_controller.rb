class Api::BoardPinsController < ApplicationController
    before_action :logged_in?

    def create
        @board_pin = BoardPin.new({board_id: params[:boardId], pin_id: params[:pinId]})
        if !@board_pin.save
            render json: @board_pin.errors.full_messages, status: 422
        end
    end   
end