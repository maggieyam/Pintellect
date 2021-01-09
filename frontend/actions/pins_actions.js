
import * as APIUtil from '../utils/pins_api_util';
import {closeModal} from './modal_actions';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const UNFOLLOW = 'UNFOLLOW';

const receivePins = (pins) => ({
  type: RECEIVE_PINS,
  pins,
});

const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin,
});

const removePin = (pinId) => ({
  type: REMOVE_PIN,
  pinId,
});


export const createPin = (pin) => (dispatch) => {
    
  return APIUtil.createPin(pin).then((pin) => {
    return dispatch(receivePin(pin));
  })
};
export const deletePin = (pinId) => (dispatch) =>
  APIUtil.deletePin(pinId).then(() => {
    

     return dispatch(removePin(pinId))});

export const requestPins = () => (dispatch) =>
  APIUtil.fetchPins().then((pins) => {
    
    return dispatch(receivePins(pins));
  });

export const requestPin = (pinId) => (dispatch) => {
  return APIUtil.fetchPin(pinId).then((pin) =>
    dispatch(receivePin(pin))
  );
};

export const updatePin = (pin) => (dispatch) => {
  return APIUtil.updatePin(pin).then((pin) =>
    dispatch(receivePin(pin))
  );
  // .then(() => closeModal());
};


export const savePin = (pinId, boardId) => dispatch => {
  return APIUtil.savePin(pinId, boardId)
  .then(pin =>     
    dispatch(receivePin(pin))
  );
}

export const createFollow = (authorId, followerId, pinId) => dispatch => {
  return APIUtil.createFollow(authorId, followerId, pinId)
  // .then( pin => dispatch(receivePin(pin))
  .then( pin => dispatch(receivePin(pin)) )
}

export const deleteFollow = (authorId, followerId, pinId) => dispatch => {
  
  return APIUtil.deleteFollow(authorId, followerId, pinId)
  .then( pin => dispatch({type: UNFOLLOW, pin,})
  )
}