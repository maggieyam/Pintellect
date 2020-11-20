json.partial! "api/users/user", user: @user

# json.errors do 
#     json.extract! @user, :id, :email
# end

# {errors: {id:2, email:einstein@aa.com}}