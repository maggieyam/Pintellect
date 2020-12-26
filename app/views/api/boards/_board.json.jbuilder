

json.extract! board, :id, :title, :description, :private, :start_date, :end_date
# json.pinIds board.pin_ids

json.links board.pins.each do |pin|
    json.url pin.link
end

json.pins board.pins
