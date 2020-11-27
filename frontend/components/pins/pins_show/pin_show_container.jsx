import {connect} from 'react-redux';
import PinShow from './pin_show';
import {requestPin} from '../../../actions/pins_actions';
import { fetchBoards } from '../../../actions/boards_actions';
// / import {openModal} from '../../../actions/modal_actions';
const mapStateToProps = ({ entities }, {match}) => {
//   
  const id = match.params.pinId;
  return {
    pin: entities.pins[id],
    id,
    // users: entities.users
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPin: (pinId) => dispatch(requestPin(pinId)),
  fetchBoards: () => dispatch(fetchBoards()),
  //   openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
