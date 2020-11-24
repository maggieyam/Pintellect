import {connect} from 'react-redux';
import CreatePinForm from './pins_create_form';
import {createPin} from '../../../actions/pins_actions';


const mapStateToProps = ({entities, session}) => {
    return {
        user: entities.users[session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPin: (pin) => dispatch(createPin(pin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);
