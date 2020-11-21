json.partial! '/api/boards/board', board: @board
#   json.pinIds @board.pins.pluck(:id)


