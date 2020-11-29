import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPen,
  faBell,
  faPlus,
  faCommentDots,
  faTrashAlt,
  faChevronDown,
  faRocket,
  faPlusCircle,
  faSignOutAlt,
  faBorderAll,
  faDotCircle,
  faArrowAltCircleUp,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { initial } from 'lodash';
import { openModal } from "../../../actions/modal_actions";
import { dropDownBtns, toggle } from "../../../utils/drop_down_util"

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    let boardId = () => props.boards.length > 0 ? 0 : -1;

    this.state = {
      title: '',
      description: '',
      link: '',
      boardId: boardId,
      selectBoards: [],

    };
    this.baseState = this.state;
    this.boards = this.state.boards
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dropDown = this.dropDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    
    const pin = Object.assign({}, this.state);
    
    this.props.createPin(pin)
        .then(this.props.history.push(`/`));   
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      this.updateImg();
    }
  }

  reset() {
    return () => this.setState(this.baseState);
  }

  // search(boards) {
  //   return e => {     
  //     let res = boards.filter(board => 
  //           !board.title.includes(e.currentTarget.value));
             
  //       this.select(res);
    
  //   }
  // }


 addBoard(boardId) {
    return () => {
      this.setState({boardId: boardId});    
      let option = document.querySelector(`#board${boardId}`).innerText;
      document.querySelector('#select').innerHTML = option;
      document.querySelector('#dropDown-content').style.display = 'none';

    };
    
 }

 updateImg() {
   
   if (this.state.link === "") return null;
   let img = document.createElement('img')
   let container = document.getElementById('create-pin-left').childNodes[0];
    img.src = this.state.link;
    if (img) {
      img.classList.add('create-pin-img')    
      container.replaceChild(img, container.childNodes[0]);
    }
 }

 select(boards) {
    return boards.slice(0, 5).map((board) => {
        return (
          <div className="select-board"
          key={board.id}
          id={`board${board.id}`}
          onClick={this.addBoard(board.id)}>
            {board.title}
          </div>
        );
      })
 }


  render() {
    const { title, description, link } = this.state;
    const { user, boards, openModal } = this.props;
    const { first_name, last_name } = user;

    const modal = {type: 'create'};
    return (
      <div id="body-container">
        <div id="body-section">
          <div>
            <form
              onSubmit={this.state.link !== "" ? this.handleSubmit : null}
              id="pin-create-form"
            >
              <div id="top-bar">
                <div id="dots-pin-form">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    size="lg"
                    id="svg-pin-form-reset"
                    onClick={this.reset()}
                  />
                </div>

                <div id="nav-right-pin-form">
                  <div id="nav-right-btns">
                    {/* {dropDownBtns(this.props.boards)} */}
                    <div id="select" onClick={() => toggle('#dropDown-content')}>
                      
                        { boards && boards[0] ? `${boards[0].title}`: 'Select'}
          
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="svg-pin-drop-down"
                        size="lg"
                        onClick={() => toggle('#dropDown-content')}
                      />
                    </div>
                    <button className="save" >Save</button>

                  </div>

                  <div id="dropDown-content">
                    <div id="wrapper-dropdown">
                      <div id="top-pin-select">
                        <input
                          // onChange={this.search(boards)}
                          id="search-pins"
                        />
                        <FontAwesomeIcon
                          icon={faSearch}
                          size="lg"
                          id="svg-pin-form-search"
                        />
                      </div>

                      <div className="dropDown-options">
                        <div id="all-boards">All boards</div>
                        {boards ? this.select(boards) : Null}
                      </div>
                      <div id="create-board-btn">
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          size="2x"
                          id="svg-pin-create-board"
                          onClick={() => openModal(modal)}
                        />
                        <div id="text-create-board">Create a board</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="pin-form-body">
                <div id="create-pin-left">
                  <div id="upload-img">
                    <FontAwesomeIcon
                      icon={faArrowAltCircleUp}
                      id="svg-pin-form"
                      margin-left="0"
                      size="2x"
                    />
                  </div>

                  <button type="button" id="save-from-site" onClick={this.updateImg()}>
                    Save from Site
                  </button>
                </div>

                <div id="create-pin-right">
                  <div id="add-title">
                    <input
                      type="text"
                      id="input-form-pins"
                      value={title}
                      placeholder={'Add your title'}
                      onChange={this.update('title')}
                    />
                    <div id="names">
                      <button className="user-initial">
                        {first_name[0]}
                      </button>
                      <div id="display-names">
                        <strong>
                          {first_name} {last_name}
                        </strong>
                      <p>0 follower</p>
                      </div>
                    </div>

                    <input
                      placeholder="Tell everyone what your pin is about"
                      id="input-pin"
                      value={description}
                      onChange={this.update('description')}
                    />
                    {/* <p>
                          People will usually see the first 50 characters when
                          they click on your pin
                        </p> */}
                  </div>
                  <input
                    placeholder="Add a desination link"
                    id="choose-link"
                    value={link}
                    onChange={this.update('link')}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePinForm;