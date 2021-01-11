import React from "react";
import LoginFormContainer from "../session/login_container";
import SignupFormContainer from "../session/signup_container";
import CreateBoardFormContainer from '../boards/board_form/create_board_container';
import EditBoardFormContainer from '../boards/board_form/edit_board_container';
import EditPinFormContainer from '../pins/pins_form/pins_edit_form_container';
import DeleteMessageFormContainer from './delete_container';

export default function Modal({ modal, closeModal, clearSessionErrors }) {
  // 
  if (!modal) {
    return null;
  }
  clearSessionErrors();
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
    case 'updateBoard':
      component = <EditBoardFormContainer/>;
      break;
    case 'updatePin':
      component = <EditPinFormContainer/>;
      break;
    case 'delete':
      component = <DeleteMessageFormContainer/>;
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
    <div className="modal-background" onClick={() => {
      closeModal();
      clearSessionErrors();
    }}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}
