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
      return action.payload.pins;
      
    case RECEIVE_PIN:         
      return merge({}, state, action.payload.pin); 

    case REMOVE_PIN:
      nextState = merge({}, state);
      delete nextState[action.pinId];    
      return nextState;

    default:
      return state;
  }
};

export default pinReducer;
