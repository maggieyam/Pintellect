import { Redirect } from 'react-router-dom';
import * as APIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});



export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(
  user => dispatch(receiveCurrentUser(user)),
  err => {
    dispatch(receiveErrors(err.responseJSON))}
  );
}  


export const login = user => dispatch => {    
    return APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
    )};

export const updateUser = user => dispatch => {
  return APIUtil.updateUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
    )};
    
export const logout = () => dispatch =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
