import React from 'react';
import { Link } from 'react-router-dom';
import CreateBoardFormContainer from '../board_form/create_board_container';
import BoardIndexItem from './board_index_item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlus} from '@fortawesome/free-solid-svg-icons';
// import { requestPins } from '../../../actions/pins_actions';
class BoardIndex extends React.Component {
    constructor(props){
        super(props);
        this.toggele = this.toggle.bind(this);
    }
    
    
    componentDidMount() {
        this.props.fetchBoards(); 
    }

    toggle() {
      let button = document.querySelector(".pin-board-create");
      let dropDown = document.querySelector('.dropDown-board');
      
      button.addEventListener('click', () => {
        if (dropDown.style.display === "none") {
          dropDown.style.display = 'block';
        } else {
          dropDown.style.display = 'none';
        }
    })
    }

    mapBoards() {
      return (
        <div className="wrapper">
              <div className="board-item-container">
      
              {this.props.boards.map((board) =>          
                <BoardIndexItem
                  board={board}
                  key={board.id}
                  openModal={this.props.openModal}
                  />
                )}

        </div>
      </div> 
      )
         
    }

    render() {
      const create = {type: 'create'};
      const { user, openModal } = this.props;

        return (
          <div className="board-index-main-container">
  
            <button id="initial-logo" >
              {user.username[0]}
            </button>
            <p id="index-header">{user.first_name}  {user.last_name}</p>
         
            <p>0 followers * 0 following</p>
            <div className="icon-row" onClick={this.toggle}>
              <div className="icon pin-board-create">
                <FontAwesomeIcon
                  icon={faPlus}           
                  id="modal-create"
                  size="2x"
                  onClick={this.toggle}
                />
              </div>
            <div className="dropDown-board">
              <div id="create-board-index">Create</div>
              <Link to={'/pin-builder' } >
                <button className="dropDown-text-board">
                  pin
                </button>
              </Link>
              <button className="dropDown-text-board" onClick={() => openModal(create)}>
                board
              </button>
            </div>
            </div>
               {this.mapBoards()}   
          </div>
        );
    }
}

export default BoardIndex;