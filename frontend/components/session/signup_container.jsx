import { connect } from 'react-redux';
import React from 'react';
import { Link } from "react-router-dom";
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = ({errors}) => {

  return {
    errors: errors.session,
    submitButton: "Continue",
    navLinkText: 'Already a member? Log in'
  };
};


const mDTP = dispatch => {
    return {
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal({type: 'login'})),
  };
};

export default connect(mSTP, mDTP)(SessionForm);