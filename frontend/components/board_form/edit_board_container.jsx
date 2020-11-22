import { connect } from 'react-redux';
// import { fetchBoard, updateBoard } from '../../actions/boards_actions';
import { requestBoard, updateBoard } from '../../actions/boards_actions';
import EditBoardForm from './edit_board_form';
import { openModal, closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => {
    return {
        board: state.entities.boards,
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