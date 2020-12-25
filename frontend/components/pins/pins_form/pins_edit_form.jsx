import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTrashAlt,
  faChevronDown,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { dropDownBtns } from "../../../utils/drop_down_util"
import { deletePinFromBoard } from "../../../utils/pins_api_util";

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin;
    this.boardId = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dropDown = this.dropDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;   
    debugger
    this.props.updatePin(this.state)
        .then(() => this.props.closeModal());   
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }


  render() {
    // const { title, description, link } = this.state;
    // const pin  = this.state;
    // const { first_name, last_name } = user;
    // // if (!boards || boards.length === 0) return null;
    // const pin = this.getPin(boards);
    // const modal = {type: 'create'};
    return (
      <div className="edit-form" id="pin-edit-form">
        <div id="form-header" >
          <h2>Edit this Pin</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="edit-pin-body-content">
            <div className="edit-pin-left">
              <label>Title</label>
                <input 
                  type="text" 
                  className="input-form"
                  placeholder={`Give a title to this pin`}
                  onChange={this.update('title')}
                  />
              <label>Board
              </label>
              <div id="edit">
                {dropDownBtns('#dropDown-content-edit', false)}
              </div>
              <label>Note</label>
                <textarea
                  placeholder={`Write a note about this pin...`}
                  onChange={this.update('description')}
                  className="textarea">
                </textarea>
            </div>
            <div className="edit-pin-right">
              <img src={this.state.link}/>
            </div>
          </div>
          <div className="pin-edit-form-btns">
            <button type="button" onClick={() => deletePinFromBoard() }>Delete</button>
            <div>
              <button type="button">Cancel</button>
              <button id="save">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPinForm;