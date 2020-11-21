import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards } from '../../actions/boards_actions';

const mapStateToProps = ({entities}, {match}) => {
    
    return {
        boards: Object.values(entities.boards),
}};

const mapDispatchToProps = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);