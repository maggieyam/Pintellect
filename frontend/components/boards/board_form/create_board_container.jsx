import { connect } from 'react-redux';
import CreateBoardForm from './create_board_form';
import {createBoard } from '../../../actions/boards_actions';
import {closeModal } from '../../../actions/modal_actions'

const mapStateToProps = ({ui}) => {
    
    return {
        pinId: ui.modal.item.pinId
    }
}
const mapDispatchToProps = dispatch => {
    return{
    createBoard: board => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
}};


export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm)