import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

const BoardIndexItem = ({board, openModal}) => {
    const modal = {type: 'update', item: board}
    return (
      <div id="index-item">
        <h3 id="boards">{board.title}</h3>
        {/* <button onClick={this.update()}></button> */}
        {/* <FontAwesomeIcon
          icon={faPen}
          id="edit-board"
          className="icon"
            value={board.id}
          size="lg"
          onClick={() => openModal('update')}
        /> */}
        <FontAwesomeIcon
          icon={faPen}
          id="edit-board"
          className="icon"
          size="2x"
          onClick={() => openModal(modal)}
        />

        {/* <Link to={`/${props.authorId}/${props.board.id}`}>{props.board.title}</Link> */}
        {/* <button className="edit" onClick={redirect}>
                <i className="edit-icon"></i>
            </button> */}
      </div>
    );
  
} 

// const modal = `update ${board.id}`
    

export default BoardIndexItem;