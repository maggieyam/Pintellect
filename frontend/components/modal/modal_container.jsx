import { connect } from "react-redux";
import Modal from './modal';
import { closeModal } from "../../actions/modal_actions";
import { clearSessionErrors } from "../../actions/session_actions"

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
