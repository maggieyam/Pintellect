import React from 'react';
import {Link} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

const BoardIndexItem = ({board, openModal}) => {
    // const redirect = <Redirect to={`/${props.board.authorId}/${props.board.id}/edit`}/>
    // {props.board}
      ;
    return( 
        <div id="show">
            
            <h3 id="boards">{board.title}</h3>
             <FontAwesomeIcon
                icon={faEdit}
                id="edit-board"
                value={board}
                size="lg"
                onClick={() => openModal('update')}
              />
            {/* <Link to={`/${props.authorId}/${props.board.id}`}>{props.board.title}</Link> */}
            {/* <button className="edit" onClick={redirect}>
                <i className="edit-icon"></i>
            </button> */}
        </div>
    )
};

export default BoardIndexItem;