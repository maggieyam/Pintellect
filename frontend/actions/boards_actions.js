import * as APIUtil from "../utils/boards_api_util";
import { closeModal } from "./modal_actions";
import { RECEIVE_PIN } from "./pins_actions";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
}) 

const receiveBoard = (board) => ({
    type: RECEIVE_BOARD,
    board
}) 

const removeBoard = (boardId) => ({
  type: REMOVE_BOARD,
  boardId,
});

const deletePin = (board) => ({
  type: REMOVE_BOARD_PIN,
  board,

})


export const createBoard = board => dispatch =>{
      
   return APIUtil.createBoard(board)
    .then(boards => { 
      // 
      return dispatch(receiveBoards(boards))
    });
}
export const deleteBoard = (boardId) => dispatch =>
  APIUtil.deleteBoard(boardId)
  .then(() => dispatch(removeBoard(boardId)))
  ;

export const fetchBoards = () => dispatch =>
    APIUtil.fetchBoards()
    .then(boards => {
      
       return dispatch(receiveBoards(boards))
    });

// export const fetchBoard = boardId => dispatch =>{
// export const requestBoard2 = boardId => dispatch =>{
//     return APIUtil.fetchBoard(boardId)
//     .then(board => {
//       
//       return dispatch(receiveBoard(board))
//     })
// };


export const requestBoard = (boardId) => dispatch => {
  
  return APIUtil.fetchBoard(boardId)
  .then(board => dispatch(receiveBoard(board)))
}

export const updateBoard = (board) => (dispatch) => {
  return APIUtil.updateBoard(board).then((boards) =>
    dispatch(receiveBoards(boards)))
    // .then(() => closeModal());
}

export const deletePinFromBoard = (pinId, boardId) => dispatch => { 
  return APIUtil.deletePinFromBoard(pinId, boardId)
  .then(board => {
    debugger
    return dispatch(deletePin(board))
  })
}

