# 
json.extract! board, :id, :title, :description, :private, :start_date, :end_date
json.pinIds board.pin_ids
