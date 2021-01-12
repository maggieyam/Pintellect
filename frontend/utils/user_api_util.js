export const updateUser = (user) => { 
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
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