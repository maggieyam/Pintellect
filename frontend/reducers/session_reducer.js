// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

// const _nullSession = { currentUser: null};

// const sessionReducer = (state=_nullSession, action) => {
//     Object.freeze(state);

//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             console.log({id: action.currentUser.id});
//             return Object.assign({}, state, {id: action.currentUser.id} );
//         case LOGOUT_CURRENT_USER:
//             return _nullSession;
//         default:
//             return state;
//     }
// }

// export default sessionReducer;

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const _nullUser = Object.freeze ({
  id: null,
});

const session = (state = _nullUser, action) => {
  Object.freeze (state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:     
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:   
      return _nullUser;
    default:
      return state;
  }
};

export default session;
