import React from "react";
import LoginFormContainer from "../session/login_container";
import SignupFormContainer from "../session/signup_container";
import CreateBoardFormContainer from '../boards/board_form/create_board_container';
import EditBoardFormContainer from '../boards/board_form/edit_board_container';

export default function Modal({ modal, closeModal }) {
  // 
  if (!modal) {
    return null;
  }
  
  let component;
  switch (modal.type) { // 1
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'create':
      component = <CreateBoardFormContainer />;
      break;
    case 'update':
      component = <EditBoardFormContainer/>;
      break;
    // case 'createPin':
    //   component = <CreatePinFormContainer />;
    //   break;
    // case 'updatePin':
    //   component = <CreatePinFormContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}
