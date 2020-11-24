json.partial! '/api/pins/pin', pin: @pin

debugger
json.author do
    debugger
  json.partial! '/api/users/user', user: @pin.author
end

