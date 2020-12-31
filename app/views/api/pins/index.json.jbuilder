json.pins do
  @pins.each do |pin|   
    json.set! pin.id do
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end

json.boards do
  current_user.boards.includes(:author).each do |board|
    json.set! board.id do
      json.pins board.pins
      board.pins.each do |pin|
          json.links pin.link
      end
      json.partial! 'api/boards/board', board: board
    end
  end
end


