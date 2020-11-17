import { combineReducers } from 'redux';
import { usersReducer } from 'users_reducer';

const entitiesReducer = combineReducers({
    boards,
    pins,
    followers
})

export default entitiesReducer;