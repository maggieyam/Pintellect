
json.extract! board, :id, :title, :description, :private, :start_date, :end_date
json.pinIds board.pin_ids

json.allUrls board.pins.each do |pin|
    json.url pin.link
end

json.allPins board.pins
# json.pinIds board.board_pins,