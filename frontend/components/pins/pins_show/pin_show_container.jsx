import {connect} from 'react-redux';
import PinShow from './pin_show';
import {requestPin, deletePin} from '../../../actions/pins_actions';
import { fetchBoards } from '../../../actions/boards_actions';
import { deletePinFromBoard } from '../../../utils/pins_api_util';
import {openModal} from '../../../actions/modal_actions';
const mapStateToProps = ({ entities, session }, {match}) => {
  const id = match.params.pinId;
  const boards = entities.pins.boards || {};
  return {
    pin: entities.pins.pin,
    boards: boards,
    id,
    user: entities.users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPin: (pinId) => dispatch(requestPin(pinId)),
  // deletePinFromBoard: (board) => dispatch(deletePin(board)),
  // deletePinFromBoard: (pinId, boardId) => dispatch(deletePinFromBoard(pinId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
