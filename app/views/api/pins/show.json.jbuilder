json.partial! '/api/pins/pin', pin: @pin


json.author do   
  json.partial! '/api/users/user', user: @pin.author
end

if @board
  json.board do
    json.partial! '/api/boards/board', board: @board
  end
end

