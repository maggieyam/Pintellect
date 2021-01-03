export const fetchPins = () => {
  
  return $.ajax({
    url: '/api/pins',
    method: 'GET',
  });
};

export const fetchPin = (pinId) => {
  return $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'GET',
    error: (err) => console.log(err),
  });
};

export const deletePin = (pinId) => {
  return $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'DELETE',
  });
};


export const updatePin = (pin) => {
  return $.ajax({
    url: `/api/pins/${pin.id}`,
    method: 'PATCH',
    data: {pin},
  });
};

export const createPin = (pin) => {
  return $.ajax({
    url: `/api/pins`,
    method: 'POST',
    data: {pin},
  });
};

export const savePin = (pinId, boardId) => {
  return $.ajax({
    url: `/api/board_pins`,
    method: 'POST',
    data: {pinId, boardId},
    error: (err) => alert(err.responseText)
  })
}

export const createFollow = (authorId, followerId, pinId) => {
  return $.ajax({
    url: `/api/follows`,
    method: 'POST',
    data: {
      author_id: authorId, 
      follower_id: followerId,
      pin_id: pinId
    }
  })
}

export const deleteFollow = (authorId, followerId, pinId) => {
  return $.ajax({
    url: `/api/follows/1`,
    method: 'DELETE',
    data: {
      author_id: authorId, 
      follower_id: followerId,
       pin_id: pinId
    }
  })
}

