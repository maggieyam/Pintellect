class Api::BoardsController < ApplicationController
    before_action :logged_in?

    def create
        @board = Board.new(board_params)
        @board.author_id = current_user.id
        has_pin = params[:board][:pinId] != -1

        if @board.save 
            if has_pin
                BoardPin.create({board_id: @board.id, pin_id: params[:board][:pinId]})
            end
            @boards = current_user.boards.includes(:pins)
            render :index
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def index     
        @boards = current_user.boards.includes(:pins)
        render :index
    end

    def show
       @board = Board.find_by(id: params[:id])
       
    #    BoardPin.create({board_id: @board.id, pin_id: @pin.id})
       render :show
    end

    def update
        board = current_user.boards.find_by(id: params[:id])
           
        if board # && @board.valid_date_period
            board.update(board_params)
            @boards = current_user.boards.includes(:pins)
            render :index
        end
    end

    def destroy
        @board = current_user.boards.find_by(id: params[:id])
        if @board
            @board.destroy
        end
        render :show
    end

    private

    def board_params
        params.require(:board).permit(:title, :private, :start_date, :end_date, :description)
    end

end
