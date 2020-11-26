import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const BoardIndexItem = ({board, openModal}) => {
    const modal = {type: 'update', item: board}
    // const create = {type: 'create', item: board}
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

        {/* <FontAwesomeIcon
          icon={faPlusCircle}
          className="icon"
          id="modal-create"
          size="2x"
          onClick={() => openModal(create)}
        />

        <div className="dropDown-content">
          <div>Create a</div>
          <div>pin</div>
          <div>board</div>
        </div> */}
      </div>
    );

    
  
} 

// const modal = `update ${board.id}`
    

export default BoardIndexItem;