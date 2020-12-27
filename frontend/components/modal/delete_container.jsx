import DeleteMessageForm from './message_box';
import { closeModal } from "../../actions/modal_actions";
import { connect } from 'react-redux';

const mapStateToProps = ({ui}) => {
    return {
        boardId: ui.modal.item.boardId,
        pinId: ui.modal.item.pinId
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMessageForm);