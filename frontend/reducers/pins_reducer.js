import {
  RECEIVE_PIN,
  RECEIVE_PINS,
  REMOVE_PIN,
} from '../actions/pins_actions';
import {merge} from 'lodash';

const pinReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PINS:
      return merge({}, action.pins);
    case RECEIVE_PIN:
        
      const newState = {[action.pin.id]: action.pin};
      return merge({}, state, newState);
    
      case REMOVE_PIN:
      let nextState = merge({}, state);
      delete nextState[action.pinId];
      
      return nextState;
    default:
      return state;
  }
};

export default pinReducer;
