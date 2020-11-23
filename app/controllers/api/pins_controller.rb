class Api::PinsController < ApplicationController
    def create
        @pin = Pin.new(board_params)
        @pin.author_id = current_user.id
        if @pin.save 
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def index     
        @pins = current_user.pins
        render :index
    end

     def update
        @pin = Board.find_by(id: params[:id])
           
        if @pin 
            @pin.update(board_params)
            render :show
        end
    end

    def destroy
        @pin = current_user.pins.find_by(id: params[:id])
        if @pin
            @pin.destroy
        end
        render :show
    end

     private

    def board_params
        params.require(:board).permit(:title, :private, :description, :link)
    end

end
