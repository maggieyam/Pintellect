import React from 'react';
import { dropDownBtns, selectWrapper, dropDownOptions, createBtns } from '../../utils/drop_down_util';

const SearchBoard = ({boards, openModal, pin}) => {
    return (
        <div className="dropDown-wrapper">
            <div id="nav-right-btns" className="feed-option">
                {dropDownBtns(`#dropDown-content-${pin.id}`, true)}
            </div>

            <div id={`dropDown-content-${pin.id}`} className="dropDown-content dropDown-feed">
                <div id="wrapper-dropdown">
                    {selectWrapper(`search-pins search-pin-${pin.id}`, boards, pin.id)}
                    {dropDownOptions(boards, pin.id)}
                    {createBtns(`#dropDown-content-${pin.id}`, openModal)}                  
                </div>
            </div>
        </div> 
    )   
}
export default SearchBoard;