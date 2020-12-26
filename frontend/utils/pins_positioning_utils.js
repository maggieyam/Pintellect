import { Link } from 'react-router-dom';
import React from 'react';
import SearchBoard from '../components/search/searchBoard'

export const reorganizePins = (pins, shuffle) => {
    
    if (shuffle) {
        pins = _.shuffle(pins);
    } 

    let newArr = [];
    const len = pins.length;
    const col = Math.floor(window.screen.width / 243.5);
    
    for (let i = 0; i < col; i++) {
        let inner = [];
        let rows = Math.floor(len / col);
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


export const mapPinsToCols = (pins, openModal, boards) => {
    if (!pins) return null;
    return(             
        <div className="pins-seeds-container">               
            {pins.map((colPins, i) => 
                <div key={i} className={`column pin-columns`}>
                  {colPins.map((pin) =>      
                    <div className="pin-wrapper" key={pin.id}>
                        <Link to={`/pin/${pin.id}`}>
                            <img 
                            src={pin.link} 
                            alt="pins" 
                            key={pin.id} 
                            id={`pin${pin.id}`} 
                            />
                        </Link>
                        {boards ? <SearchBoard 
                            boards={boards}
                            openModal={openModal}
                            pin={pin}
                        /> : null}
                        
                    </div>                                  
                )}
                </div>
              )}
           </div> 
    )
}