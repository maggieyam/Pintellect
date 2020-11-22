import React from 'react';
import {Link, Redirect} from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import EditBoardFormContainer from '../board_form/edit_board_container';
import EditBoardForm from '../board_form/edit_board_form';
import { openModal } from '../../actions/modal_actions';

const BoardIndexItem = ({board}) => {
  // const redirect = <Redirect to={`/${props.board.authorId}/${props.board.id}/edit`}/>
  // {props.board}
//   constructor(props) {
//     super(props);
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.match.params.boardId !== prevProps.match.params.boardId) {
//       this.setState()
//     }
//   }

//   componentDidMount() {
//     this.setState()
//   }
//   const handleUpdate = () => {
//     //   e.preventDefault;
//     //   const board = Object.assign({}, this.state);
//     //   this.props.
    
//     <Redirect to={`/${authorid}/${board.ids}`}/>
//   }
//   debugger
    return (
      <div id="index-item">
        <h3 id="boards">{board.title}</h3>
        {/* <button onClick={this.update()}></button> */}
        <FontAwesomeIcon
          icon={faPen}
          id="edit-board"
          className="icon"
        //   value={board.id}
          size="lg"
          onClick={() => openModal()}
    
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