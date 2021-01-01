import {connect} from 'react-redux';
import PinIndex from './pins_index';
import {requestPins} from '../../../actions/pins_actions';
// import { fetchBoards } from '../../../actions/boards_actions';
import {openModal} from '../../../actions/modal_actions';

const mapStateToProps = ({ entities }) => {
  
  const payload = entities.pins;
  return {
    pins: payload.pins,
    boards: payload.boards,
    user: entities.users
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestPins: () => dispatch(requestPins()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
