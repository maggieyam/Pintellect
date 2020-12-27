import {
  RECEIVE_PIN,
  RECEIVE_PINS,
  REMOVE_BOARD_PIN,
  REMOVE_PIN,
} from '../actions/pins_actions';
import {merge} from 'lodash';

const pinReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PINS:
      return merge({}, state, action.pins);
      
    case RECEIVE_PIN:      
      
      return merge({}, action.pin);   
    case REMOVE_PIN:
      let nextState = merge({}, state);
      delete nextState[action.pinId];
      
      return nextState;
    case REMOVE_BOARD_PIN:
      
      // let nextState = merge({}, state);
      return state;
    default:
      return state;
  }
};

export default pinReducer;
