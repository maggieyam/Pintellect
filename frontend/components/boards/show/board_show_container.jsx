import {connect} from 'react-redux';
import BoardShow from './board_show';
import {requestBoard} from '../../../actions/boards_actions'
import {requestPins} from '../../../actions/pins_actions'
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = ({entities, session}) => {
  return {
    board: entities.boards.board,
    authorId: session.id
  };
};


const mapDispatchToProps = dispatch => {
  return {
    requestBoard: (boardId) => dispatch(requestBoard(boardId)),
    openModal: (modal) => dispatch(openModal(modal))
    // requestPins: () => dispatch(requestPins()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);