import { connect } from 'react-redux';
import EditPinForm from './pins_edit_form';
import { updatePin } from '../../../actions/pins_actions';
import { fetchBoards } from '../../../actions/boards_actions'
import { closeModal } from '../../../actions/modal_actions';


const mapStateToProps = ({ui}) => {
    return {
        pin: ui.modal.item,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePin: (pin) => dispatch(updatePin(pin)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);
