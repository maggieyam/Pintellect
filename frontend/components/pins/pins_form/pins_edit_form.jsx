import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTrashAlt,
  faChevronDown,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { toggle } from "../../../utils/drop_down_util"

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin;
    this.boards = this.state.boards
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dropDown = this.dropDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;   
    this.props.updatePin(this.props.pinId)
        .then(this.props.history.push(`/`));   
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }


  render() {
    // const { title, description, link } = this.state;
    // const { user, boards, pinId } = this.props;
    // const { first_name, last_name } = user;
    // // if (!boards || boards.length === 0) return null;
    // const pin = this.getPin(boards);
    // const modal = {type: 'create'};
    return (
      <div className="edit-form" id="pin-edit-form">
        <div id="form-header">
          <h2>Edit this Pin</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          
        </form>
      </div>
    );
  }
}

export default EditPinForm;