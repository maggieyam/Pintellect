import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards } from '../../../actions/boards_actions';
import { requestPin, requestPins } from '../../../actions/pins_actions'
import { openModal } from '../../../actions/modal_actions';
const mapStateToProps = ({entities, session}, {match} ) => {
    // const id = ownProps.location.pathname.split('/').join('');
    const id = session.id;
    
    return {
        boards: Object.values(entities.boards),
        // pin: entities.pins[id],
        user: entities.users[id],
        // pins: entities.pins,
}};

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
  requestPin: (pinId) => dispatch(requestPin(pinId)),
  requestPins: () => dispatch(requestPins()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);