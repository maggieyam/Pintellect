import { connect } from 'react-redux';
import EditPinForm from './pins_edit_form';
import { updatePin } from '../../../actions/pins_actions';
import { fetchBoards } from '../../../actions/boards_actions'
import { openModal } from '../../../actions/modal_actions';


const mapStateToProps = ({entities, session}, {match}) => {
    
    const {boards} = entities;
    const pinId = match.params.pinId;
    const pin = {};
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].pinIds.includes(pinId)) {
        pin = boards[i].allPins[pinId];
      }

    }
    return {
        user: entities.users[session.id],
        boards: Object.values(entities.boards),
        pinId: match.params.pinId
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePin: (pin) => dispatch(updatePin(pin)),
    fetchBoards: () => dispatch(fetchBoards()),
    
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm);
