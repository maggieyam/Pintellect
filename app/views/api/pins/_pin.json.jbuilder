

json.extract! pin, :id, :title, :description, :author_id, :link, :comments
json.boards current_user.boards.each do |board|
    json.id board.id
    json.title board.title
    json.link board.pins[0].link
end


# json.photoUrls pin.photos.map { |image| url_for(image) }