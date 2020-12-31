
json.partial! "api/users/user", user: @user

# 
# # json.extract! @user, :id, :email, :username, :age, :first_name, :last_name, :description, :location, :url, :background
# json.errors do 
#     json.extract! @user, :id, :email
# end

# {errors: {id:2, email:einstein@aa.com}}