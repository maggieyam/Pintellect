import {
  RECEIVE_PIN,
  RECEIVE_PINS,
  UNFOLLOW,
  REMOVE_BOARD_PIN,
  REMOVE_PIN,
} from '../actions/pins_actions';
import {merge} from 'lodash';

const pinReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_PINS:
      return merge({}, state, action.pins);
      
    case RECEIVE_PIN:         
      return merge({}, state, action.pin); 
    
    case UNFOLLOW:
      nextState = merge({}, state);
      delete nextState.user;
      return merge({}, nextState, action.pin);

    case REMOVE_PIN:
      nextState = merge({}, state);
      delete nextState[action.pinId];    
      return nextState;

    default:
      return state;
  }
};

export default pinReducer;
