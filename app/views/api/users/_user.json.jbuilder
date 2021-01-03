
json.extract! user, :id, :email, :username, :age, :first_name, :last_name, :description, :location, :url, :background
json.followers user.follower_ids
json.followings user.following_ids
# json.photoUrl user.photo.map { |image| url_for(image) }
