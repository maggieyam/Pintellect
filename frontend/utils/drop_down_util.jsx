
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faPlusCircle,} from '@fortawesome/free-solid-svg-icons';
import {savePin} from './pins_api_util';
import React from 'react';

export const toggle = (selector) => {
      let dropDown = document.querySelector(`${selector}`);

        if (dropDown.style.display === "none") {
          dropDown.style.display = 'flex';
        } else {
          dropDown.style.display = 'none';
        }
 }

 export const reveal = name => {
      let item = document.querySelector(name);
      item.style.display = 'flex';
    }

 export const hide = name => {
      let item = document.querySelector(name);
      item.style.display = 'none';
    }


 export const dropDownBtns = (selector, save) => {
    return(
         <div onClick={() => toggle(selector)}>
          <div id="select" >                 
              Select         
              <FontAwesomeIcon
              icon={faChevronDown}
              id="svg-pin-drop-down"
              size="lg"
              />
          </div>
          {save ? <button className="save" >Save</button> : null}
        </div>
    )
 }

 export const search = (boards, pinId) => {
    return e =>    
    boards.map(board => {
        let option = document.querySelector(`#board${board.id}pin${pinId}`);
        if(!board.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())){
            option.style.display = 'none';
        } else {
            option.style.display = 'block';
        }});                        
}

export const select = (boards, pinId) => {    
    return boards.map((board) => {
        return (
        <div className="select-board"
        key={board.id}
        id={`board${board.id}pin${pinId}`}
        onClick={() => savePinToBoard(pinId, board.id)}>
            <img src={board.link ? board.link : null} className="mini-img"/>
            {board.title}
        </div>
        );
    })
}

export  const savePinToBoard = (pinId, boardId) => {
    savePin(pinId, boardId).then(() => toggle(`#dropDown-content${pinId}`));
}

export const selectWrapper = (className, boards, pinId) => {
  return(
     <div id="top-pin-select">
      <input
          onChange={search(boards, pinId)}
          className={className}
      />
      <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          id="svg-pin-form-search"
      />
    </div>
  )
}

export const dropDownOptions = (boards, pinId) => {
  return(
    <div className="dropDown-options">
        <div id="all-boards">All boards</div>
        {boards ? select(boards, pinId) : null}
    </div>
  )
}

export const createBtns = (selector, openModal) => {
  const modal = {type: 'create'};
  return (
    <div id="create-board-btn">
        <FontAwesomeIcon
        icon={faPlusCircle}
        size="2x"
        id="svg-pin-create-board"
        onClick={() => {
            hide(selector);
            openModal(modal)
        }}
        />
        <div id="text-create-board">Create a board</div>
    </div>
  )
}
  

// export const dropDownWrapper = (className, selector, boards, pinId, openModal) => {

//     selectWrapper(className, boards, pinId);
//     dropDownOptions(boards);
//     createBtns(selector, openModal);
// }