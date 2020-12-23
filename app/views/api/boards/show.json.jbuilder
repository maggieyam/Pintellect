#

  json.partial! '/api/boards/board', board: @board
  json.pinIds @board.pins.pluck(:id)


# json.partial! '/api/boards/board', board: @board
#   json.pinIds @board.pins.pluck(:id)
@board.pins.each do |pin|
  json.pins do   
    json.set! pin.id do     
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end




