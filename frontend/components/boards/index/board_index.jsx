import React from 'react';
import CreateBoardFormContainer from '../board_form/create_board_container';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.setState(this.props.fetchBoards());
    }

    render() {
        const { boards, user, openModal} = this.props;
        
        return (
          <div className="index">
            {/* <button id="index-initial"></button> */}
            <p id="initial-logo">{user.username[0]}</p>
            <p id="index-header">{user.username}</p>
            {/* <button
              className="modal-index"
              id="initial"
              onClick={() => this.props.openModal('create')}
            > */}
              {/* {user.username[0].toUpperCase()}
            </button> */}
            <p className="index-name">@{user.first_name}</p>
            <p>0 followers * 0 following</p>
            <div>
              {boards.map((board) => {
                return (
                  <BoardIndexItem 
                  board={board} 
                  openModal={openModal} 
                  key={board.id} />
                );
              })}
            </div>
            {/* <CreateBoardFormContainer /> */}
          </div>
        );
    }
}

export default BoardIndex;