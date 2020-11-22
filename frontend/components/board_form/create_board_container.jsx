import { connect } from 'react-redux';
import { createBoard } from '../../actions/boards_actions';
import CreateBoardForm from './create_board_form';
import { openModal, closeModal } from "../../actions/modal_actions";
const mapDispatchToProps = dispatch => ({
    createBoard: board => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
});


export default connect(null, mapDispatchToProps)(CreateBoardForm)