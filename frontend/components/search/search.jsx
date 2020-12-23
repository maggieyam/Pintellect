import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTrashAlt,
  faChevronDown,
  faPlusCircle,
  faArrowAltCircleUp,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { initial } from 'lodash';
// import { openModal } from "../../../actions/modal_actions";
import { dropDownBtns, toggle } from "../../utils/drop_down_util";
// import { debug } from 'webpack';
import {savePin} from '../../actions/pins_actions';

const SearchBoard = ({boards, openModal, pin}) => {
    

    const search = (boards) => {
        return e => {     
        boards.map(board => {
            let option = document.querySelector(`#board${board.id}`);
            if(!board.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())){
            option.style.display = 'none';
            } else {
            option.style.display = 'block';
            }});                 
        }
    }

    // const savePin = (pinId, boardId) => {
    //     savePin(pinId, boardId);
    // }
   

    const select = (boards) => {
    
        return boards.map((board) => {
            // 
            return (
            <div className="select-board"
            key={board.id}
            id={`board${board.id}`}
            onClick={() => savePin(pin.id, board.id)}>
                <img src={pin.link ? pin.link : null} className="mini-img"/>
                {board.title}
            </div>
            );
        })
    }

 
        // const { user, boards, openModal } = this.props;
        const modal = {type: 'create'};
        return (
            <div>
                <div id="nav-right-btns">
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

                  <div id={`dropDown-content${pin.id}`} className="dropDown-content">
                    <div id="wrapper-dropdown">
                      <div id="top-pin-select">
                        <input
                          onChange={search(boards)}
                          id="search-pins"
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