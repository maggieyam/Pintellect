import * as APIUtil from "../utils/boards_api_util";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

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


export const createBoard = board => dispatch =>
    APIUtil.createBoard(board)
    .then(board => dispatch(receiveBoard(board)));

export const deleteBoard = (boardId) => dispatch =>
  APIUtil.deleteBoard(boardId)
  .then(() => dispatch(removeBoard(boardId)));

export const fetchBoards = () => dispatch =>
    APIUtil.fetchBoards()
    .then(boards => dispatch(receiveBoards(boards)));

export const fetchBoard = boardId => dispatch =>
    APIUtil.fetchBoard(boardId)
    .then(board => dispatch(receiveBoard(board)));

export const updateBoard = (board) => (dispatch) =>
  APIUtil.updateBoard(board)
  .then(board => dispatch(receiveBoard(board)));
