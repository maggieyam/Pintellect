

json.extract! pin, :id, :title, :description, :author_id, :link, :comments
# json.followers current_user.follower_ids
# end
# json.followings current_user.followings.each do |followering|
#     followering.id
# end

json.followings pin.author.following_ids
json.followers pin.author.follower_ids
json.url pin.author.url
# json.photoUrls pin.photos.map { |image| url_for(image) }