import { connect } from 'react-redux';
import { createBoard } from '../../actions/boards_actions';
import CreateBoardForm from './create_board_form';

const mapDispatchToProps = dispatch => ({
    createBoard: board => dispatch(createBoard(board))
});

export default connect(null, mapDispatchToProps)(CreateBoardForm)