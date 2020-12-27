
import * as APIUtil from '../utils/pins_api_util';
import {closeModal} from './modal_actions';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';

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

const removeBoardPin = (pinId) => ({
  type: REMOVE_BOARD_PIN,
  pin,
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

export const deletePinFromBoard = (pinId, boardId) => dispatch => {
  debugger
  return APIUtil.deletePinFromBoard(pinId, boardId)
  .then((pin) => dispatch(removeBoardPin(pin)))
}
// export const savePin = (pinId, boardId) => {
//   return APIUtil.savePin(pinId, boardId)
// }