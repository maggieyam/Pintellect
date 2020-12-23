

json.extract! pin, :id, :title, :description, :author_id, :link, :comments
json.boards current_user.boards

# json.photoUrls pin.photos.map { |image| url_for(image) }