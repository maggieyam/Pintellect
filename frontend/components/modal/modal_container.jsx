import { connect } from "react-redux";
import React from "react";
import Modal from './modal';
import { closeModal } from "../../actions/modal_action";

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
