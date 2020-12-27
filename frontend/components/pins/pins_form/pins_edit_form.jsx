import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { dropDownBtns, createBtns } from "../../../utils/drop_down_util"
// import { deletePinFromBoard, deletePin } from '../../../actions/pins_actions';
import {deletePinFromBoard} from "../../../actions/boards_actions";
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
    
    this.props.updatePin(this.state)
        .then(() => this.props.closeModal());   
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  search(boards) {
    return e => {     
      boards.map(board => {
        let option = document.querySelector(`#board${board.id}`);
        if(!board.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())){
          option.style.display = 'none';
        } else {
          option.style.display = 'block';
        }});                 
    }
  }


 addBoard(boardId) {
    return () => {
      this.boardId = boardId;  
      const {boards} = this.props;
      
      
      let option = document.querySelector(`#board${boardId}`).innerText;
      document.querySelector('#select').innerHTML = option;
      document.querySelector('.dropDown-content2').style.display = 'none';
      if (boards[this.boardId].pinIds.includes(this.state.id)) {
        document.querySelector('.pin-delete').style.display = 'block';
      } else {
        document.querySelector('.pin-delete').style.display = 'none';
      }

    };   
 }

 select(boards) {
    return boards.map((board) => {
        return (
          <div className="select-board"
          key={board.id}
          id={`board${board.id}`}
          onClick={this.addBoard(board.id).bind(this)}>

            <img src={board.links[0] ? board.links[0].url : null} className="mini-img"/>
            {board.title}
          </div>
        );
      })
 }

 navRight() {
   let { boards, openModal } = this.props;
   if (!boards) return null;
   boards = Object.values(boards);
   return(
    <>
      {dropDownBtns('.dropDown-content2', false)}

      <div className="dropDown-content2">
        <div id="wrapper-dropdown">
          <div id="top-pin-select">
            <input
              onChange={this.search(boards)}
              className="search-pins"
            />
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              id="svg-pin-form-search"
            />
          </div>

          <div className="dropDown-options-wrapper">
            <div id="all-boards">All boards</div>
            <div className="dropDown-options">
              {boards ? this.select(boards) : null}
            </div >
          </div>
          {createBtns(`.dropDown-content2`, openModal)}
        </div>
      </div>
    </>
   )
 }

  editInfo() {
    return (
      <>
        <div className="pin-edit-left-wrapper">
          <label>Title</label>
            <input 
              type="text" 
              className="input-form edit-field"
              placeholder={`Give a title to this pin`}
              onChange={this.update('title')}
              />
        </div>       

        <div className="pin-edit-left-wrapper2">
            <label>Note</label>
            <textarea
              placeholder={`Write a note about this pin...`}
              onChange={this.update('description')}
              className="textarea pin-note edit-field">
            </textarea>
        </div>
      </>
    )
    
  }

  delete() {
    if (this.props.boards[this.boardId]) {
      deletePinFromBoard(this.props.pin.id, this.boardId);
      this.props.closeModal();
    }
  }

  deleteBtn() {
    return(
      <button 
        type="button" 
        className="delete pin-delete" 
        onClick={() => this.delete()}
        >Delete
      </button>
    )
  }

  render() {
    const {user, pin, boards} = this.props;
    
    return (
      <div className="edit-form" id="pin-edit-form">
        <div id="form-header" >
          <h2>Edit this Pin</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="edit-pin-body-content">
            <div className="edit-pin-left">
              <div className="pin-edit-left-wrapper">
                <label>Board
                </label>
                <div className="edit">
                  {this.navRight()}
                </div>
              </div>

              {user.id === pin.author_id ? this.editInfo() : null}
            </div>
            <div className="edit-pin-right">
              <img src={this.state.link}/>
            </div>
          </div>
          <div className="pin-edit-form-btns">
            {this.deleteBtn()}
            

            <div>
              <button 
                type="button" 
                onClick={() => this.props.closeModal()}
                >Cancel
              </button>
              <button id="save">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPinForm;