import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_action';
import { Signup } from './signup';

const mDSP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),

})

export default connect(null, mDSP)(Signup);