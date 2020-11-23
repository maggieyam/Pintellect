import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

const BoardIndexItem = ({board, openModal}) => {
    const modal = {type: 'update', item: board}
    return (
      <div id="index-item">
        <h3 id="boards">{board.title}</h3>
        <FontAwesomeIcon
          icon={faPen}
          id="edit-board"
          className="icon"
          size="2x"
          onClick={() => openModal(modal)}
        />
      </div>
    );
  
} 

// const modal = `update ${board.id}`
    

export default BoardIndexItem;