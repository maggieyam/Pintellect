
json.extract! board, :id, :title, :description, :private, :start_date, :end_date
json.pinIds board.pin_ids

json.allUrls board.pins.each do |pin|
    json.url pin.link
end

json.allPins board.pins

json.currentBoards current_user.boards.each do |board|
    json.id board.id
    json.title board.title
    if board.pins[0]
        json.link board.pins[0].link
    end
end
# json.pinIds board.board_pins,