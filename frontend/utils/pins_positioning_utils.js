import { Link } from 'react-router-dom';
import React from 'react';
import SearchBoard from '../components/search/search_board'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const reorganizePins = (pins, cols, shuffle) => {
    if (shuffle) {
        pins = _.shuffle(pins);
    } 
    
    let newArr = [];
    const len = pins.length;
    const col = cols || Math.floor(window.innerWidth / 243.5);

    for (let i = 0; i < col; i++) {
        let inner = [];
        let rows = Math.floor(len / col);
        for (let j = 0; j < rows; j++){
            inner.push(pins[rows * i + j]);             
        }
        newArr.push(inner);
    }

    const newLen = newArr.length * newArr[0].length;
    if (newLen < len ) {
        addItemsToCols(len - newLen, newArr, pins.slice(newLen));
    }
    return newArr;
}


const addItemsToCols = (num, newArr, original) => {
    for (let i = 0; i < num; i++) {
        newArr[i].push(original[i]);
    }
}


const deleteBtn = (pin, openModal, board) => {
    const modal = {type: 'delete', item: {pinId: pin.id, boardId: board.id}};
    return(
        <div 
            className="trash-pen-wrapper" 
            onClick={() => openModal(modal)}
        >
            <FontAwesomeIcon
                icon={faTrashAlt}
                className="trash"
                size="sm"
            />
        </div>
    )

}

export const mapPinsToCols = (pins, openModal, boards, board, toDelete) => {

    if (!pins) return null;
    return(             
        <div className="pins-seeds-container">               
            {pins.map((colPins, i) => 
                <div key={i} id={`${i}-columns`} className={`column`} >
                  {colPins.map((pin) =>      
                    <div className={`pin-wrapper pin-${pin.id}`} key={pin.id}>
                        <Link to={`/pin/${pin.id}`}>
                            <img 
                            src={pin.link} 
                            alt="pins" 
                            key={pin.id} 
                            id={`pin${pin.id}`} 
                            />
                        </Link>
                        <SearchBoard 
                            boards={boards}
                            openModal={openModal}
                            pin={pin}
                        /> 
                        
                        <h2 id={`save-message-${pin.id}`} style={{display: 'none'}}>
                            Pin is Saved!
                        </h2>
                       
                        {toDelete && boards && board ? deleteBtn(pin, openModal, board) : null}
                    </div>                                  
                )}
                </div>
              )}
           </div> 
    )
}