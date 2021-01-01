import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {requestPins} from '../../actions/pins_actions';
import { openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router';

import Navbar from './navbar'
const mapStateToProps = ({ session, entities}) => {
  return {
    currentUser: entities.users[session.id],
    pins: entities.pins.pins
  }};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  requestPins: () => dispatch(requestPins()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));