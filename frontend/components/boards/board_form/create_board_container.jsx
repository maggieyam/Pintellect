import { connect } from 'react-redux';
import CreateBoardForm from './create_board_form';
import {createBoard } from '../../../actions/boards_actions';
import {closeModal } from '../../../actions/modal_actions'

const mapDispatchToProps = dispatch => {
    return{
    createBoard: board => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
}};


export default connect(null, mapDispatchToProps)(CreateBoardForm)