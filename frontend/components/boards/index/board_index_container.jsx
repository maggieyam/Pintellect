import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards } from '../../../actions/boards_actions';
import { openModal } from '../../../actions/modal_actions';
const mapStateToProps = ( {entities, session} ) => {
    const id = session.id;

    return {
      user: entities.users[id],
      boards: Object.values(entities.boards),
      pins: Object.values(entities.pins),
}};

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);