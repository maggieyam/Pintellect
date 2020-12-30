import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTrashAlt,
  faArrowAltCircleUp,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { dropDownBtns, reveal, hide, createBtns } from "../../../utils/drop_down_util"


class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      link: '',
      pinId: 0,
    };
    this.baseState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateImg = this.updateImg.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    hide('.dropDown-content');
    if (!this.state.boardId) return null;
    if (this.state.link === '') {
      const img = document.querySelector('#upload-img');
      img.style.background = '#ffe6e6';
      img.style.outline = "thin solid #FF0000"; 
      document.querySelector('.error-img2').style.color = 'red';
      hide('#svg-pin-form');
      hide('.text-upload') 
      reveal('#svg-pin-warning'); 
      reveal('.error-img1');
      return;
    }
    
    this.props.createPin(this.state)
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

  reset() {
    return () => {
      this.setState(this.baseState);
      this.updateImg();
      hide('#show-img');
      reveal('#upload-img');
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
      this.setState({boardId: boardId});    
      let option = document.querySelector(`#board${boardId}`).innerText;
      document.querySelector('#select').innerHTML = option;
      document.querySelector('.dropDown-content').style.display = 'none';

    };
    
 }

updateImg() {  
  let img = document.createElement('img')
  let container = document.getElementById('show-img');

  if (this.state.link === "" && !container) return null;
  img.src = this.state.link; 
  if (img.src === "") {
    hide('#show-img');
    reveal('#upload-img');
    
    container.removeChild(container.childNodes[0]);
  } else {
    hide('#upload-img')
    reveal('#show-img');
    img.classList.add('create-pin-img')     
    if (container.childNodes[0]){
      container.replaceChild(img, container.childNodes[0]);
    } else  {
      container.appendChild(img);
    }
    const background = document.querySelector('#upload-img');
    background.style.background = '#efefef';
    background.style.outline = "none"; 
    document.querySelector('.error-img2').style.color = '#767676';
    reveal('#svg-pin-form');
    reveal('.text-upload') 
    hide('#svg-pin-warning'); 
    hide('.error-img1');
    
  }
 }

 select(boards) {
    return boards.map((board) => {
      // 
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

 navLeft() {
   return(
     <div id="dots-pin-form">
        <FontAwesomeIcon
          icon={faTrashAlt}
          size="lg"
          id="svg-pin-form-reset"
          onClick={this.reset()}
        />
    </div>
   )
  
 }

 navRight() {
   const { boards, openModal } = this.props;
   return(
    <div id="nav-right-pin-form">
      <div id="nav-right-btns">
        {dropDownBtns('.dropDown-content', true)}
      </div>

      <div className="dropDown-content">
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
            </div>
          </div>
          {createBtns(`.dropDown-content`, openModal)}
        </div>
      </div>
    </div>
   )
 }

 bodyLeft() {
   return(
     <div id="create-pin-left">
       <div id="show-img">
       </div>
        <div id="upload-img">
          <FontAwesomeIcon
            icon={faArrowAltCircleUp}
            id="svg-pin-form"
            size="2x"
          />
          <FontAwesomeIcon
            icon={faExclamationCircle}
            id="svg-pin-warning"
            size="2x"
          />
          <div>
            <p className="text-upload">
              Click to Upload
            </p>
            <p className="error-img1">
              An image is required to <br/>
              create a Pin.
            </p>
            <p className="error-img2">
              Recommendation: use high-quality .jpg<br/>
              files smaller than 20MB
            </p>
          </div>
        </div>
      </div>
   )
 }

bodyRight() {
  const { first_name, last_name } = this.props.user;
  const { title, description, link } = this.state;
  return(
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
      </div>
      <input
        placeholder="Add an image link"
        id="choose-link"
        value={link}
        onChange={this.update('link')}
      />
      <button type="button" id="save-from-site" onClick={this.updateImg}>
        Preview from link
      </button>
    </div>
  )
}
  render() {
    return (
      <div id="body-container">
        <div id="body-section">
          <div>
            <form onSubmit= {this.handleSubmit} id="pin-create-form">
              <div id="top-bar">
                {this.navLeft()}
                {this.navRight()}  
              </div>

              <div id="pin-form-body">
                {this.bodyLeft()}
                {this.bodyRight()}              
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePinForm;