import { connect } from 'react-redux';
import EditProfileForm from './edit_profile';
import {updateUser} from '../../actions/session_actions';

const mapStateToProps = ({entities, session}) => {
    return {
        user: entities.users[session.id],
    }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);