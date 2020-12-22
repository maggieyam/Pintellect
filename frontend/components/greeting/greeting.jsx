import React from "react";
import { Link, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faMapPin, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as IMGUtil from '../../utils/image_util';
import FadeIn from "react-fade-in";
import {createIcon, createSpinIcon, createButtonLink} from '../../utils/graphics.util';
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
      <nav className="left-nav">
        {createSpinIcon(faStroopwafel, "logo", "lg")}
        <h3 id="board-nav-header">Pintellect</h3>
      </nav>
    )
  }

  rightNav() {
    const signup = {type: 'signup'};
    const login = ({type: 'login'});
    return(
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
    )
  }

  drawColumns(images, className, col) {
    return (
      <div className={className} key={col}>
        {col === 1 || col === 7 ? null : 
          <img src={IMGUtil.img7} 
          alt="modern" className={`placeholder${col - 1} column`}/>
        }
        {images.map((image,idx) =>        
          <img src={image} alt="modern" key={idx}/>
        )}
      </div>
    )
  }

  

  sessionLinks() {
    
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
            {['1','2','3'].map((num,idx) => 
            <FontAwesomeIcon
              icon={faStroopwafel}
              spin
              className={`faStroopwafel${num}`}
              size="xs"
              key={idx}
            />
              )}
          </div>

          <section className="seeds-container"> 
            {IMGUtil.images.map((colImages, idx) => {
              return(
                <FadeIn delay={`${50 + idx * 300}`} key={idx}>                  
                  {this.drawColumns(colImages, `column`, idx + 1)}
                </FadeIn>
              )              
            })}           
          </section>
        </header>
      )};

  
  personalGreeting() {
    // const create = {type: 'create'};
    // const update = {type: 'update', item: {title: 'Space', id:'64'}};

    return (
      <hgroup className="header-group">
        <div className="left-nav-icons">
          {createSpinIcon(faStroopwafel, "board-logo", "2x")}
          {createButtonLink("/", "home-link", "board-nav-button", "home-button", "Home")}
          {createButtonLink("/about", "nav-link", "board-nav-button", "today", "About")}
          {createButtonLink("/", "nav-link", "board-nav-button", "following", "Following")}
      </div>
        <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg" />
        <input type="text" placeholder="Search" id="search" />
       <div className="right-nav-icons">
          <Link to="/pin-builder">
            {createIcon(faMapPin, "icon", "2x", "add-pin")}
          </Link>      
          {createButtonLink(`/${this.props.currentUser.id}`, "", "", "go-to-board", this.props.currentUser.username[0])}
          {createIcon(faSignOutAlt, "icon", "2x", "log-out", this.props.logout)}
        </div>
      </hgroup>
    )};

  render(){
    return (
      <>
        {this.props.currentUser ? this.personalGreeting() : this.sessionLinks()}
      </>
    );
  }

};

export default Greeting;