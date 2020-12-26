@boards.each do |board|  
  json.set! board.id do
    json.pins board.pins
    json.partial! 'api/boards/board', board: board
  end
end

