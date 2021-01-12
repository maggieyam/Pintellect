import DeleteMessageForm from './message_box';
import { closeModal } from "../../actions/modal_actions";
import { connect } from 'react-redux';
import { deletePinFromBoard } from '../../actions/boards_actions';

const mapStateToProps = ({ui}) => {
    return {
        boardId: ui.modal.item.boardId,
        pinId: ui.modal.item.pinId
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    deletePin: (pinId, boardId) => dispatch(deletePinFromBoard(pinId, boardId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMessageForm);