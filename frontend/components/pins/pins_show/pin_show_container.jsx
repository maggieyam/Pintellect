import {connect} from 'react-redux';
import PinShow from './pin_show';
import {requestPin, deletePin } from '../../../actions/pins_actions';
import { deletePinFromBoard } from '../../../utils/pins_api_util';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';
import {openModal} from '../../../actions/modal_actions';

const mapStateToProps = ({ entities, session }, {match}) => {
  const id = match.params.pinId;
  
  return {
    pin: entities.pins[id],
    boards: entities.boards,
    users: entities.users,
    id,
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPin: (pinId) => dispatch(requestPin(pinId)),
  // deletePinFromBoard: (board) => dispatch(deletePin(board)),
  // deletePinFromBoard: (pinId, boardId) => dispatch(deletePinFromBoard(pinId)),
  openModal: (modal) => dispatch(openModal(modal)),
  createFollow: (authorId, userId, pinId) => dispatch(createFollow(authorId, userId, pinId)),
  deleteFollow: (authorId, userId, pinId) => dispatch(deleteFollow(authorId, userId, pinId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
