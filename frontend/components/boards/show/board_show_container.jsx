import {connect} from 'react-redux';
import BoardShow from './board_show';
import {requestBoard} from '../../../actions/boards_actions'
import {requestPins} from '../../../actions/pins_actions'
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = ({entities, session}, {match}) => {
  
  return {
    // user: entities.users[match.params.authorId],
    board: entities.boards[match.params.boardId],
    authorId: session.id
    // id: match.params.boardId
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