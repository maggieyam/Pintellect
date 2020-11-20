class Api::BoardsController < ApplicationController
    # before_action :logged_in?
    def create
        @board = Board.create(board_params)
        if @board.save 
            render "api/boards/show"
        end
    end

    def index
        @boards = Boards.all
        render :index
    end

    def show
       @board = Board.find_by(id: params[:id])
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board # && @board.valid_date_period
            @board.update(board_params)
            render :show
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
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
