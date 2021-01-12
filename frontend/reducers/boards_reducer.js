import { 
    RECEIVE_BOARD, 
    RECEIVE_BOARDS, 
    REMOVE_BOARD,
    REMOVE_BOARD_PIN 
} from '../actions/boards_actions';
import { merge } from "lodash";
import { RECEIVE_PINS } from '../actions/pins_actions';

const boardReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PINS:
            return action.payload.boards;

        case RECEIVE_BOARDS:   
            return merge({}, action.boards);
        
        case RECEIVE_BOARD:            
        const newState = {'board': action.board, 
                            'userBoards': action.board.userBoards}           
        return merge({}, state, newState)
    
        case REMOVE_BOARD:
        let nextState = merge({}, state);           
        delete nextState[action.boardId];
        return nextState;
    
        case REMOVE_BOARD_PIN:
        return state;
        default:
            return state;
    }
}

export default boardReducer;