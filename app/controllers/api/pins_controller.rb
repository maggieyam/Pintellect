class Api::PinsController < ApplicationController
    def create
        
        @pin = Pin.new(pin_params)
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

    def show     
        @pin = Pin.find_by(id: params[:id])
        render :show if @pin
            
    end

     def update
        @pin = Pin.find_by(id: params[:id])
        if @pin 
            @pin.update(pin_params)
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

    def pin_params
        params.require(:pin).permit(:title, :private, :description, :link)
    end

end
