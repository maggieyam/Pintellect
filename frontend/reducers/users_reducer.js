import { RECEIVE_PIN } from '../actions/pins_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { UNFOLLOW, FOLLOW } from '../actions/follow_actions'
import { merge } from "lodash";
const usersReducer = (state = {}, action) => {
  Object.freeze (state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign ({}, state, {
        [action.currentUser.id]: action.currentUser,
      });

    case RECEIVE_PIN:     
      return merge({}, state, action.payload.author);
    
    case FOLLOW:
      return merge({}, state, {[action.user.id]: action.user})
    case UNFOLLOW:
      let nextState = merge({}, state);     
      delete nextState[action.user.id]
      return merge({}, nextState, {[action.user.id]: action.user});

    default:
      return state;
  }
};

export default usersReducer;
