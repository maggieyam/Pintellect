json.partial! '/api/pins/pin', pin: @pin


json.author do
    
  json.partial! '/api/users/user', user: @pin.author
end

