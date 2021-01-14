
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faPlusCircle,} from '@fortawesome/free-solid-svg-icons';
import {savePin} from './pins_api_util';
import React from 'react';
import { Redirect } from 'react-router-dom';

export const toggle = (selector) => {
      let dropDown = document.querySelector(`${selector}`);
      if (!dropDown) return;
        if (dropDown.style.display === "none") {
          dropDown.style.display = 'flex';
        } else {
          dropDown.style.display = 'none';
        }
 }

 export const reveal = name => {
      let item = document.querySelector(name);
      if (!item) return;
      item.style.display = 'flex';
    }

 export const hide = name => {
      let item = document.querySelector(name);
      if (!item) return;
      item.style.display = 'none';
    }


const show = (selector) => { 
  let dropDown = document.querySelector(selector);
  window.addEventListener('click', e => {
  if (e.target.parentElement 
     && e.target.parentElement.parentElement 
     && e.target.parentElement 
     && (e.target.parentElement.parentElement.parentElement === dropDown.parentElement
     || e.target === dropDown.childNodes[0].childNodes[0].childNodes[0])){
     reveal(selector);
  } else {
    hide(selector);
  }
})
}

 export const dropDownBtns = (selector, save) => {

    return(
         <div onClick={() => show(selector)} >
          <div id="select" > Select                    
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

export const select = (boards, pinId, msg) => { 
  if (!boards) return null;  
  
  return boards.map((board) => {
      return (
        <div className="select-board"
          key={board.id}
          id={`board${board.id}pin${pinId}`}
          onClick={() => savePinToBoard(pinId, board).then(() => {
           if (msg) {
             const select = document.querySelector('#select');
             select.innerHTML = `saved to ${board.title}`;
           } 
          })}
        >
          {board.links[0] ? <img src={board.links[0].url} className="mini-img"/> : null }
          {board.title}
        </div>
      );
  })
}

export  const savePinToBoard = (pinId, board) => {
    return savePin(pinId, board.id).then((err) => {  
      
      hide(`#dropDown-content-${pinId}`);
      let text = document.querySelector(`#save-message-${pinId}`);
      let select = document.querySelector(`#select-text`)
      if(select) select.innerHTML = `Saved to ${board.title}`;
      if (text) text.style.display = 'block';
    });

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

export const dropDownOptions = (boards, pinId, msg) => {
  return(
    <div className="dropDown-options-wrapper">
      <div id="all-boards">All boards</div>
      <div className="dropDown-options">
        {!boards || boards.length === 0 ? <p id="pin-error-msg2">Create a board! <br/>(click the Plus icon below)</p> : null}
        {boards ? select(boards, pinId, msg) : null}
      </div>
    </div>
  )
}

export const createBtns = (selector, pinId, openModal) => {
  const modal = {type: 'create', item: {pinId: pinId}};
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