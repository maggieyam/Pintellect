import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router';
const mapStateToProps = ({ errors, session }) => {
  return {
    session,
    errors: errors.session,
    submitButton: "Log in",
    url: "/signup",
    navLinkText: 'Not on Pinterest yet? Sign up',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal({type: 'signup'})),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));