import { 
    RECEIVE_BOARD, 
    RECEIVE_BOARDS, 
    REMOVE_BOARD 
} from '../actions/boards_actions';
import { merge } from "lodash";

const boardReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_BOARDS:   
            return merge({}, action.boards);
        case RECEIVE_BOARD:
            debugger
            const newState = {[action.board.id]: action.board}           
            return merge({}, state, newState)
        case REMOVE_BOARD:
            let nextState = merge({}, state);
            delete nextState[action.board.id];
            return nextState;
        default:
            return state;
    }
}

export default boardReducer;