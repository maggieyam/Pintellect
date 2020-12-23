import { Link } from 'react-router-dom';
import React from 'react';
import SearchBoard from '../components/search/search'
import PinIndex from '../components/pins/pins_index/pins_index';
import { openModal } from '../actions/modal_actions';
const { shuffle } = require("lodash")

export const reorganizePins = (pins, shuffle) => {
    if (shuffle) {
        pins = _.shuffle(pins);
    } 

    let newArr = [];
    const len = pins.length;

    for (let i = 0; i < 7; i++) {
        let inner = [];
        let rows = Math.floor(len / 7);
        for (let j = 0; j < rows; j++){
            inner.push(pins[rows * i + j]);             
        }
        // 
        newArr.push(inner);
    }

    const newLen = newArr.length * newArr[0].length;
    if (newLen < len ) {
        addItemsToCols(len - newLen, newArr, pins.slice(newLen));
    }
    // 
    return newArr;
}

const addItemsToCols = (num, newArr, original) => {
    for (let i = 0; i < num; i++) {
        newArr[i].push(original[i]);
    }
}


export const mapPinsToCols = (pins, addBoard, openModal) => {
    if (!pins) return null;
    return(             
        <div className="pins-seeds-container">               
            {/* {addBoard(21, 95)} */}
              {pins.map((colPins, i) => 
                  <div key={i} className={`column column${i + 1} pin-columns`}>
                  {colPins.map((pin) => 
             
                  <div>
                    <Link to={`/pin/${pin.id}`}>
                      <img 
                      src={pin.link} 
                      alt="pins" 
                      key={pin.id} 
                      id={`pin${pin.id}`} 
                      />
                    </Link>
                      <SearchBoard 
                        boards={pin.boards}
                        openModal={openModal}
                        pin={pin}
                      />
                 </div>
                  
                    
                )}
                </div>
              )}
           </div> 
    )
}