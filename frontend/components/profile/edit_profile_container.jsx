import { connect } from 'react-redux';
import EditProfileForm from './edit_profile';

const mapStateToProps = ({entities, session}) => {
    return {
        user: entities.users[session.id],
    }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: () => dispatch(updateUserInfo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);