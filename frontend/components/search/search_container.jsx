import { connect } from 'react-redux';
import SearchBoard from './search';
import { fetchBoards } from '../../actions/boards_actions'
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = ({entities, session}) => {
    return {
        user: entities.users[session.id],
        boards: Object.values(entities.boards)
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoard);