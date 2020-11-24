@pins.each do |pin| 
  debugger 
  json.set! pin.id do
    debugger
    json.partial! 'api/pins/pin', pin: pin
  end
end