json.pin do
  json.set! @pin.id do 
    json.partial! '/api/pins/pin', pin: @pin
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

json.author do
  json.set! @pin.author_id do
    json.partial! '/api/users/user', user: @pin.author
  end
end
