@boards.each do |board|  
  json.set! board.id do
    json.partial! 'api/boards/board', board: board
  end
end


# if @pins
#     
#   pins.each do |pin|
#     json.pin do
#       json.partial! '/api/pins/pin', pin: @pin
#     end
#   end
# end