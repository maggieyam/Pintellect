import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_action";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_action";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    submitButton: "Log in",
    navLink: <Link to="/signup">Not on Pinterest yet? Sign up</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);