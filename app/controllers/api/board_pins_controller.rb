class Api::BoardPinsController < ApplicationController
    before_action :logged_in?

    def create
        @board_pin = BoardPin.new({board_id: params[:boardId], pin_id: params[:pinId]})
        if !@board_pin.save
            render json: @board_pin.errors.full_messages, status: 422
        end
    end   

    def destroy
        @board = Board.find(params[:boardId])
        pin = Pin.find(params[:pinId])
        return if !pin || !@board 

        board_pin = BoardPin.find_by({board_id: params[:boardId], pin_id: params[:pinId]})

        if board_pin          
            board_pin.delete
        end        
        
        boards = pin.boards
        if boards.empty?
            pin.destroy
        end
        render "api/boards/show"
    end
end