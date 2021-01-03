import React from 'react';
import { Link } from 'react-router-dom';
import CreateBoardFormContainer from '../board_form/create_board_container';
import BoardIndexItem from './board_index_item';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlus} from '@fortawesome/free-solid-svg-icons';

class BoardIndex extends React.Component {
    constructor(props){
        super(props);
    }   
    
    componentDidMount() {
        this.props.fetchBoards(); 
    }

    reveal(name) {
      let item = document.querySelector(name);
      item.style.display = 'block';
    }

    hide(name) {
      let item = document.querySelector(name);
      item.style.display = 'none';
    }

    mapBoards() {  
        
      return (
        <div className="wrapper">
          <div className="board-item-container"> 
            {this.props.boards.map((board, idx) => 
              <BoardIndexItem
                board={board}
                key={idx}
                openModal={this.props.openModal}
                />
              )}
        </div>
      </div> 
      )
         
    }

    render() {
      const create = {type: 'create', item: {pinId: -1}};
      const { user, boards, openModal } = this.props;
      if (!boards.length) return null;

      const follows = Object.values(boards.pop());
      let followers = follows[0] || [];
      let followings = follows[1] || [];
      let followersNum = followers.length;
      debugger

      // if(follows.followings !== undefined){
      let followingsNum = followings.length;
      // } ;
        return (
          <div className="board-index-main-container">
            <div className="board-header-wrapper">
              <button id="initial-logo" >
                {user.photo ? user.photo : user.username[0]}
              </button>
              <h1 id="index-header">{user.first_name}  {user.last_name}</h1>
              <span>{user.location} &#8226; @{user.username} &#8226; {user.description}</span>
              <strong>{followersNum} {followersNum === 1 ? 'follower' : 'followers'} &#8226; {followingsNum} {followingsNum === 1 ? 'following' : 'followings'}</strong>
            </div>

            <div className="icon-row">
              <div className="icon pin-board-create" 
                onClick={() => this.reveal('.dropDown-board')}>
                <FontAwesomeIcon
                  icon={faPlus}           
                  id="modal-create"
                  size="2x"  
                  onClick={() => this.reveal('.dropDown-board')}                
              />
             </div>

            <div className="dropDown-board">
              <div id="create-board-index">Create</div>
                <Link to={'/pin-builder' } >
                  <button className="dropDown-text-board">
                    pin
                  </button>
                </Link>
              <button 
                className="dropDown-text-board" 
                onClick={() => {
                  this.hide('.dropDown-board');
                  openModal(create);
                  }}>
                board
              </button>
            </div>
            </div>
               {this.mapBoards()} 
               {boards.push(follows)}  
          </div>
        );
    }
}

export default BoardIndex;