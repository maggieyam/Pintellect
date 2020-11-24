#
@board do 
  json.partial! '/api/boards/board', board: @board
  json.pinIds @board.pins.pluck(:id)
end

# json.partial! '/api/boards/board', board: @board
#   json.pinIds @board.pins.pluck(:id)
@board.pins.includes(:author).each do |pin|
  json.pins do
    debugger
    json.set! pin.id do
      debugger
      json.partial! 'api/pins/pin', pin: pin
    end
  end
  
json.authors do
    json.set! pin.author.id do
      json.extract! pin.author, :id, :username
    end

end

