import { connect } from 'react-redux';
import CreatePinForm from './pins_create_form';
import { createPin } from '../../../actions/pins_actions';
import { fetchBoards } from '../../../actions/boards_actions'
import { openModal } from '../../../actions/modal_actions';


const mapStateToProps = ({entities, session}) => {
    
    return {
        user: entities.users[session.id],
        boards: Object.values(entities.boards)
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPin: (pin) => dispatch(createPin(pin)),
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);
