import { connect } from 'react-redux';
// import { fetchBoard, updateBoard } from '../../actions/boards_actions';
import { requestBoard, updateBoard } from '../../actions/boards_actions';
import EditBoardForm from './edit_board_form';
import { openModal, closeModal } from "../../actions/modal_actions";
import React from 'react';

const mapStateToProps = (board) => {
    return {
        // board: state.entities.boards,
        board
    // board: state.session.id,
}};

const mapDispatchToProps = (dispatch) => ({
  requestBoard: (boardId) => dispatch(requestBoard(boardId)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal('create')),
  openModal: () => dispatch(openModal('update')),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);

// class EditBoard extends React.Component {
//   componentDidMount() {
//     this.props.fetchPost(this.props.match.params.postId);
//   }

//   render() {
//     // DO NOT MODIFY THIS FUNCTION
//     const {action, formType, post} = this.props;

//     // Hint: The post will not exist on the first render - what do we need to do
//     // to get it?
//     if (!post) return null;
//     return <PostForm action={action} formType={formType} post={post} />;
//   }
// }