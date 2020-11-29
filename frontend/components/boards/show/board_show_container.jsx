import {connect} from 'react-redux';
import BoardShow from './board_show';
import {requestBoard} from '../../../actions/boards_actions'
import {requestPins} from '../../../actions/pins_actions'

const mapStateToProps = ({entities}, {match}) => {
  
  return {
    // user: entities.users[match.params.authorId],
    board: entities.boards[match.params.boardId],
    // id: match.params.boardId
  };
};


const mapDispatchToProps = dispatch => {
  return {
    requestBoard: (boardId) => dispatch(requestBoard(boardId)),
    // requestPins: () => dispatch(requestPins()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);