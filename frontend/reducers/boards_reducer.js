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
            
            const newState = {'board': action.board}           
            return merge({}, state, newState)
        case REMOVE_BOARD:
            let nextState = merge({}, state);
            
            delete nextState[action.boardId];
            return nextState;
        default:
            return state;
    }
}

export default boardReducer;