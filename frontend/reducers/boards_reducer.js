import { 
    RECEIVE_BOARD, 
    RECEIVE_BOARDS, 
    REMOVE_BOARD 
} from '../actions/boards_actions';
import { merge } from "lodash/merge";

const boardReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BOARDS:           
            return action.boards;
        case RECEIVE_BOARD:
            const newState = {[action.board.id]: action.board}
            return merge({}, state, newState)
        case REMOVE_BOARD:
            let nextState = merge({}, state);
            delete nextState(action.board.id);
            return nextState;
        default:
            return state;
    }
}

export default boardReducer;