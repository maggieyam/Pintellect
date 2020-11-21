import { connect } from 'react-redux';
// import { fetchBoard, updateBoard } from '../../actions/boards_actions';
import { requestBoard, updateBoard } from '../../actions/boards_actions';
import EditBoardForm from './edit_board_form';


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.boardId;
    return {
        id,
        board: state.entities.boards[id],
    // board: state.session.id,
}};

const mapDispatchToProps = dispatch => ({
    requestBoard: (boardId) => dispatch(requestBoard(boardId)),
    updateBoard: board => dispatch(updateBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);