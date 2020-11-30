import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Greeting from "./greeting";
import { withRouter } from 'react-router';
const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  }};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  // closeModal: (modal) => dispatch(closemodal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
