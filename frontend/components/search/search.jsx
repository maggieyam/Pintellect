import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronDown,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { dropDownBtns, toggle } from "../../utils/drop_down_util";
import {savePin} from '../../utils/pins_api_util';

const SearchBoard = ({boards, openModal, pin}) => {
    

    const search = (boards) => {
        return e =>    
        boards.map(board => {
            let option = document.querySelector(`#board${board.id}pin${pin.id}`);
            if(!board.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())){
                option.style.display = 'none';
            } else {
                option.style.display = 'block';
            }});                        
    }

    const savePinToBoard = (pinId, boardId) => {
        savePin(pinId, boardId).then(() => toggle(`#dropDown-content${pin.id}`));
    }
   

    const select = (boards) => {    
        return boards.map((board) => {
            return (
            <div className="select-board"
            key={board.id}
            id={`board${board.id}pin${pin.id}`}
            onClick={() => savePinToBoard(pin.id, board.id)}>
                <img src={board.link ? board.link : null} className="mini-img"/>
                {board.title}
            </div>
            );
        })
    }

        // const { user, boards, openModal } = this.props;
    const modal = {type: 'create'};
    return (
        <div className="dropDown-wrapper">
            <div id="nav-right-btns" className="feed-option">
                {/* {dropDownBtns(this.props.boards)} */}
                <div id="select" onClick={() => toggle(`#dropDown-content${pin.id}`)}>                 
                        Select         
                    <FontAwesomeIcon
                    icon={faChevronDown}
                    id="svg-pin-drop-down"
                    size="lg"
                    onClick={() => toggle(`#dropDown-content${pin.id}`)}
                    />
                </div>
                <button className="save" onClick={() => toggle(`#dropDown-content${pin.id}`)}>Save</button>

                </div>

                <div id={`dropDown-content${pin.id}`} className="dropDown-content dropDown-feed">
                <div id="wrapper-dropdown">
                    <div id="top-pin-select">
                    <input
                        onChange={search(boards)}
                        className={`search-pins search-pin-${pin.id}`}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        size="lg"
                        id="svg-pin-form-search"
                    />
                    </div>

                    <div className="dropDown-options">
                    <div id="all-boards">All boards</div>
                    {boards ? select(boards) : null}
                    </div>
                    <div id="create-board-btn">
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        size="2x"
                        id="svg-pin-create-board"
                        onClick={() => openModal(modal)}
                    />
                    <div id="text-create-board">Create a board</div>
                    </div>
                </div>
            </div>
        </div> 
    )
        
    
}
export default SearchBoard;