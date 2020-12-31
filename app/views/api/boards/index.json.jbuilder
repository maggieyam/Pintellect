@boards.each do |board|  
  json.set! board.id do
    json.pins board.pins
    json.partial! 'api/boards/board', board: board
  end
end

  json.follows do
    json.followers current_user.follower_ids
    json.followering current_user.following_ids
  end


