import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPen,
  faBell,
  faPlus,
  faCommentDots,
  faTrashAlt,
  faChevronCircleDown,
  faRocket,
  faPlusCircle,
  faSignOutAlt,
  faBorderAll,
  faDotCircle,
  faArrowAltCircleUp,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { initial } from 'lodash';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    let boardId = () => props.boards.length > 0 ? 0 : -1;

    this.state = {
      title: '',
      description: '',
      link: '',
      boardId: boardId,
      // empty: false,
      // board: []

    };
    this.baseState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dropDown = this.dropDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    
    // delete this.state['board'];
    // delete this.state['empty'];
    
    const pin = Object.assign({}, this.state);
      // delete this.state.saved
      this.props
        .createPin(pin)
        // .then(this.add_pins(this.state.board, pin))
        .then(this.props.history.push(`/`));
  
      // this.props.history();
      console.log(pin);
    
  }


  componentDidMount() {
    this.props.fetchBoards();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }

  reset() {
    return () => this.setState(this.baseState);
  }

  search(boards) {
    return e => {
      
      for (let i = 0; i < boards.length; i++) {
        if (!boards[i].title.includes(e.currentTarget.value)){
          return <div>{boards[i]}</div>
        }     
      }
    }
  }

 toggle() {
      let button = document.querySelector("#select");
      let dropDown = document.querySelector('#dropDown-content');
      
      button.addEventListener('click', () => {
        if (dropDown.style.display === "none") {
          dropDown.style.display = 'block';
        } else {
          dropDown.style.display = 'none';
        }
  })
 }

 addBoard(boardId) {
    return () => {
      this.setState({boardId: boardId});
      let option = document.querySelector(`#board${boardId}`).innerText;
      document.querySelector('#select').innerHTML = option;
      document.querySelector('#dropDown-content').style.display = 'none';
      // 
      // option.addEventListener('click', () => {
      //   
        // return text.innerHTML("Test");

//         return text.style.display('none');
//       })
    };
    
 }

 updateImg() {
   if (this.state.link === "") return null;
   let img = document.createElement('img')
    let container = document.getElementById('create-pin-left').childNodes[0];
    img.src = this.state.link;
    if (img) {
      img.classList.add('create-pin-img')
      return container.replaceChild(img, container.childNodes[0]);
    }
    return null;
 }
//  selectBoard(){
//    this.setState({})
//  }

  // componentDidUpdate(prevProps){
  //   if (!this.props.boards !== prevProps.boards) {
  //     this.setState({saved: true, board: this.props.board[0]});
  //   }
  // }

  render() {
    const { title, description, link, boardId } = this.state;
    const { first_name, last_name } = this.props.user;
    const boards = this.props.boards;
    // const addBtn = <button onClick={this.addBoard()}>`${boards[0].title}`</button>;
    const select = (boards) => {          
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
    // const {boards} = this.props;
    
    return (
      <div id="body-container">
        <div id="body-section">
          <div>
            <form
              onSubmit={this.handleSubmit}
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
                    <div id="select" onClick={this.toggle.bind(this)}>
                      
                        { boards && boards[0] ? `${boards[0].title}`: 'Select'}
          
                      <FontAwesomeIcon
                        icon={faChevronCircleDown}
                        id="svg-pin-drop-down"
                        size="lg"
                        onClick={this.toggle.bind(this)}
                      />
                    </div>
                    <button className="save" >Save</button>

                  </div>

                  <div id="dropDown-content">
                    <div id="wrapper-dropdown">
                      <div id="top-pin-select">
                        <input
                          onChange={this.search(boards)}
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
                        {boards ? select(boards) : Null}
                      </div>
                      <div
                        id="create-board-btn"
                        onClick={() => this.props.history('/id')}
                      >
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          size="2x"
                          id="svg-pin-create-board"
                          onClick={this.reset()}
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