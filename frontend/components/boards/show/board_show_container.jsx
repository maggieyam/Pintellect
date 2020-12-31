import {connect} from 'react-redux';
import BoardShow from './board_show';
import {requestBoard, fetchBoards} from '../../../actions/boards_actions'
import {requestPins} from '../../../actions/pins_actions'
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = ({entities, session}, {match}) => {
  return {
    board: entities.boards[match.params.boardId],
    userBoards: Object.values(entities.boards),
    authorId: session.id
  };
};


const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    fetchBoards: () => dispatch(fetchBoards()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);