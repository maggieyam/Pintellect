import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    submitButton: "Log in",
    navLinkText: 'Not on Pinterest yet? Sign up',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal("signup")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);