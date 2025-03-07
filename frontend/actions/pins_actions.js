
import * as APIUtil from '../utils/pins_api_util';
import {closeModal} from './modal_actions';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';


const receivePins = (payload) => ({
  type: RECEIVE_PINS,
  payload,
});

const receivePin = (payload) => ({
  type: RECEIVE_PIN,
  payload,
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
  APIUtil.fetchPins().then((payload) => {  
    return dispatch(receivePins(payload));
  });

export const requestPin = (pinId) => (dispatch) => {
  return APIUtil.fetchPin(pinId).then((payload) =>
    dispatch(receivePin(payload))
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

