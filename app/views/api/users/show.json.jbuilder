# json.partial! "api/users/user", user: @user

json.errors do 
    json.extract! @user, :id, :last_name
end