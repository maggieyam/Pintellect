import React from "react";
import { Link, NavLink, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faMapPin, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as IMGUtil from '../../utils/image_util';
import FadeIn from "react-fade-in";
import {createIcon, createSpinIcon} from '../../utils/icon.util';
// import ReactCSSTransitionGroup from 'react-transition-group';
// import { closeModal } from "../../actions/modal_actions";
// import { FaRegCircle } from "react-icons/fa";
// import { space } from '../../../app/assets/images/arch/index'

class Greeting extends React.Component{
  constructor(props) {
    super(props);
  }
  
  leftNav() {
    return(
      <>
        <nav className="left-nav">
          {createSpinIcon(faStroopwafel, "logo", "lg")}
          <h3 id="board-nav-header">Pintellect</h3>
        </nav>
      </>
    )
  }

  rightNav() {
    return(
      <>
        <nav className="right-nav">
          <div className="login-signup">
            <button onClick={() => this.props.openModal(login)} id="login">
              Log in
            </button>
            <button onClick={() => this.props.openModal(signup)} id="signup">
              Sign up
            </button>
          </div>
        </nav>
      </>
    )
  }

  drawColumns(images, className, col) {
    return (
      <div className={className} key={col}>
        {col === 0 || col === 6 ? null : 
          <img src={IMGUtil.img7} 
          alt="modern" className={`placeholder${col} column1 column`} />
        }
        {images.map((image,idx) =>        
          <img src={image} alt="modern" key={idx}/>
        )}
      </div>
    )
  }

  sessionLinks() {
    const signup = {type: 'signup'};
    const login = ({type: 'login'});
    // let prev = 0;
    // document.addEventListener('scroll', () => openModal(signup));
    // document.addEventListener('scroll', () => {
    // // document.addEventListener('scroll', () => openModal(signup));
    //   setTimeout(() => {
    //     openModal(login);
    // }, 500)
      
    // });
    // if (window.scrollY > 0) {openModal(signup)}
    
    return (
        <header className="group">
          <div className="main-nav">
            {this.leftNav()}
            {this.rightNav()}           
          </div>
          <div className="main-content">
            <div>Get Your Next</div><br />
            <p>Architecture idea</p>
            {['1','2','3'].map(num => 
              createSpinIcon(faStroopwafel, `faStroopwafel${num}`, 'xs')
              )}
          </div>

          <section className="seeds-container"> 
            {IMGUtil.images.map((col, idx) => {
              return(
                <FadeIn delay={`${50 + idx * 300}`}>                  
                  {this.drawColumns(col, `column${idx + 1} column`, idx)}
                </FadeIn>
              )              
            })}           
          </section>
        </header>
      )};

  
  personalGreeting() {
    const create = {type: 'create'};
    const update = {type: 'update', item: {title: 'Space', id:'64'}};

    return (
      <hgroup className="header-group">
        {/* <section className="left-nav-index"> */}
        <div className="left-nav-icons">
           <FontAwesomeIcon icon={faStroopwafel}  spin  className="board-logo" size="2x" />
          <Link to="/" id="home-link">
            <button className="board-nav-button" id="home-button">
                Home
            </button>
          </Link>

          <Link to="/" id="nav-link">
            <button className="board-nav-button" id="today">
                Today
            </button>
          </Link>

          <Link to="/" id="nav-link">
            <button className="board-nav-button" id="following">
                Following
            </button>
          </Link>
      </div>
        <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg" />
        <input type="text" placeholder="Search" id="search" />
       <div className="right-nav-icons">
          {/* <FontAwesomeIcon
            icon={faBell}
            id="bell"
            className="icon"
            size="2x"
            // onClick={redirect}
          /> */}
          <Link to="/pin-builder">
          <FontAwesomeIcon
            icon={faMapPin}
            className="icon"
            id="add-pin"
            size="2x" 
          />
          </Link>
          
          <Link to={`/${this.props.currentUser.id}`}>
            <button id="go-to-board" >
                  {this.props.currentUser.username[0]}
            </button>
          </Link>

          {/* <FontAwesomeIcon
            icon={faChevronCircleDown}
            className="drop-down-icon"
            size="2x"
          /> */}

          
          <FontAwesomeIcon
            icon={faSignOutAlt}
            id="log-out"
            className="icon"
            onClick={this.props.logout}
            size="2x"
          />
        </div>
        {/* </div> */}
        {/* <div class="dropdown">
        <button class="dropbtn"></button> */}
        {/* <select class="dropdown-content">
        <option></option>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </select> */}
        {/* </section> */}
        {/* <BoardIndexItem /> */}
      </hgroup>
    );};

  render(){
    return (
      <>
        {this.props.currentUser ? this.personalGreeting() : this.sessionLinks()}
      </>
    );
  }

};

export default Greeting;