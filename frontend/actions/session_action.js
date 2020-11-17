import { postUser, postSession, deleteSession } from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const createNewUser = (formUser) => dispatch => {
    return postUser(formUser)
        .then(user => dispatch({
            type: RECEIVE_CURRENT_USER,
            user
        })
    )
}

export const login = (formUser) => dispatch => {
    return postSession(formUser)
    .then(user => dispatch({
        type: RECEIVE_CURRENT_USER,
        user
        })
    )
}

export const logout = () => dispatch => {
    return deleteSession()
    .then(() => dispatch({
        type: LOGOUT_CURRENT_USER,
        })
    )
}

