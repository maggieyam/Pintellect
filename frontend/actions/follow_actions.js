

import * as APIUtil from '../utils/user_api_util';

export const UNFOLLOW = 'UNFOLLOW';
export const FOLLOW = 'FOLLOW';

export const createFollow = (authorId, followerId, pinId) => dispatch => {
  return APIUtil.createFollow(authorId, followerId, pinId)
  // .then( pin => dispatch(receivePin(pin))
  .then( user => dispatch({type: FOLLOW, user}) )
}

export const deleteFollow = (authorId, followerId, pinId) => dispatch => {
  
  return APIUtil.deleteFollow(authorId, followerId, pinId)
  .then( user => dispatch({type: UNFOLLOW, user})
  )
}