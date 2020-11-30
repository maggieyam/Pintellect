import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTrashAlt,
  faChevronDown,
  faPlusCircle,
  faArrowAltCircleUp,
} from '@fortawesome/free-solid-svg-icons';
// import { initial } from 'lodash';
// import { openModal } from "../../../actions/modal_actions";
import { toggle } from "../../../utils/drop_down_util"

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      link: '',
      boardId: 0,
      selectBoards: [],

    };
    this.boards = this.state.boards
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dropDown = this.dropDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;   
    this.props.updatePin(this.props.pinId)
        .then(this.props.history.push(`/`));   
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
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

 getPin(boards) {
    // const pin = {};
    for (let i = 0; i < this.props.boards.length; i++) {
      if (boards[i].pinIds.includes(this.props.pinId)) {
        pin = boards[i].allPins[pinId];
        
        return pin;
      }

    }
  }


 select(boards) {
// deb/ugger
    return boards.map((board) => {
        return (
          <div className="select-board"
          key={board.id}
          id={`board${board.id}`}
          onClick={this.addBoard(board.id)}>

            <img src={board.allUrls[0] ? board.allPins[0].link : null} className="mini-img"/>
            {board.title}
          </div>
        );
      })
 }


  render() {
    const { title, description, link } = this.state;
    const { user, boards, pinId } = this.props;
    const { first_name, last_name } = user;
    // if (!boards || boards.length === 0) return null;
    const pin = this.getPin(boards);
    // const modal = {type: 'create'};
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
                  {/* <img src={pin.link}
                  /> */}
                </div>

                <div id="nav-right-pin-form">
                  <div id="nav-right-btns">
                    {/* {dropDownBtns(this.props.boards)} */}
                    <div id="select" onClick={() => toggle('#dropDown-content')}>                 
                         Select
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
                  {/* <div id="upload-img">
                    <FontAwesomeIcon
                      icon={faArrowAltCircleUp}
                      id="svg-pin-form"
                      margin-left="0"
                      size="2x"
                    />
                  </div> */}

                </div>

                <div id="create-pin-right">
                  <div id="add-title">
                    <input
                      type="text"
                      id="input-form-pins"
                      value={title}
                      placeholder={'Edit your title'}
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

                    <textarea
                      placeholder="Tell everyone what your pin is about"
                      id="description-pin"
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

export default EditPinForm;