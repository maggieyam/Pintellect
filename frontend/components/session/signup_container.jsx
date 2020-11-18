import { connect } from 'react-redux';
import React from 'react';
import { Link } from "react-router-dom";
import { signup } from '../../actions/session_action';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_action'

const mSTP = ({errors}) => {

  return {
    age: "Age",
    errors: errors.session,
    submitButton: "signup",
    navLink: <Link to="/login">Already a member? Log in</Link>,
  };
};


const mDTP = dispatch => {
    return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(SessionForm);