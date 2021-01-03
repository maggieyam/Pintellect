
json.extract! user, :id, :email, :username, :age, :first_name, :last_name, :description, :location, :url, :background
if user.follower_ids 
    json.followers user.follower_ids
else
    json.followers []
end
if user.following_ids
    json.followings user.following_ids
else
    json.followings []
end
# json.photoUrl user.photo.map { |image| url_for(image) }
