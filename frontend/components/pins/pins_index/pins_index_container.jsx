import {connect} from 'react-redux';
import PinIndex from './pins_index';
import {requestPins} from '../../../actions/pins_actions';
// import { fetchBoards } from '../../../actions/boards_actions';
// / import {openModal} from '../../../actions/modal_actions';
const mapStateToProps = ({ entities }) => {
  
  return {
    pins: Object.values(entities.pins),
    user: entities.users
    // users: entities.users
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPins: () => dispatch(requestPins()),
  // requestPin: (pinId) => dispatch(requestPin(pinId)),
  //   openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
