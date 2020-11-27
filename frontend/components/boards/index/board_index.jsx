import React from 'react';
import { Link } from 'react-router-dom';
import CreateBoardFormContainer from '../board_form/create_board_container';
import BoardIndexItem from './board_index_item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { requestPins } from '../../../actions/pins_actions';
class BoardIndex extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchBoards();
        // this.props.requestPins();
    }


    render() {
      const create = {type: 'create'};
      const { boards, user, openModal } = this.props;
      // if (!boards) re

        return (
          <div className="board-index-main-container">
  
            <button id="initial-logo" >
              {user.username[0]}
            </button>
            <p id="index-header">{user.first_name}  {user.last_name}</p>
         
            <p>0 followers * 0 following</p>
            <div className="icon-row">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="icon"
                id="modal-create"
                size="2x"
                
              />

            <div className="dropDown-board">
              <div id="create-board-index">Create</div>
              <button className="dropDown-text-board">
                <Link to={'/pin-builder'} >pin</Link>
              </button>
              <button className="dropDown-text-board" onClick={() => openModal(create)}>
                board
              </button>
            </div>
            </div>
            <div className="board-item-container">
              {boards.map((board) => {
                return (
                  <BoardIndexItem
                    board={board}
                    openModal={openModal}
                    key={board.id}
                  />
                );
              })}
            </div>
          </div>
        );
    }
}

export default BoardIndex;