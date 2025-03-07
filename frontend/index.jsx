import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './utils/session_api_util'
import {fetchBoards} from './actions/boards_actions'

document.addEventListener ('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    
    let userBoards = {}
    
    const currUserBoardsArr = [];
    if (window.currentUser.boards){
        currUserBoardsArr = window.currentUser.boards;
        
        currUserBoardsArr.map((board) => {
          userBoards[board.id] = board;
        })
    }
    
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser},
        boards: userBoards
      },
      session: {id: window.currentUser.id},
    };
    store = configureStore (preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore ();
  }
 


  
  const root = document.getElementById ('root');
  ReactDOM.render (<Root store={store}/>, root);
});






