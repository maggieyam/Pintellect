import { connect } from 'react-redux';
import EditPinForm from './pins_edit_form';
import { updatePin } from '../../../actions/pins_actions';
import { closeModal } from '../../../actions/modal_actions';


const mapStateToProps = ({entities, session, ui}) => {
  
    return {
        pin: ui.modal.item.pin,
        boards: ui.modal.item.boards,
        user: entities.users[session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePin: (pin) => dispatch(updatePin(pin)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);
