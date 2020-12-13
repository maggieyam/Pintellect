import React from "react";
// import FadeIn from 'react-fade-in';
import { Link, NavLink, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faMapPin, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as IMGUtil from '../../utils/image_util';
import FadeIn from "react-fade-in";
// import ReactCSSTransitionGroup from 'react-transition-group';
// import { closeModal } from "../../actions/modal_actions";
// import { FaRegCircle } from "react-icons/fa";
// import { space } from '../../../app/assets/images/arch/index'

const Greeting = ({ currentUser, logout, openModal, }) => {
  // const action = (e) => {
  //   e.preventDefault();
  //     const user = {email: 'einstein@gmail.com', password: '123456'};
  //     this.props.login(user).then(() => closeModal());
  // }

  const sessionLinks = () => {
    const signup = {type: 'signup'};
    const login = ({type: 'login'});
    // let prev = 0;
    document.addEventListener('scroll', () => openModal(signup));
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
            <nav className="left-nav">
              {/* <FontAwesomeIcon icon={faRocket} className="bounce" size="lg" /> */}
              <FontAwesomeIcon
                icon={faStroopwafel}
                spin
                className="logo"
                spin
                size="lg"
              />
              <h3 id="board-nav-header">Pintellect</h3>
            </nav>

            <nav className="right-nav">
              <div className="login-signup">
                <button onClick={() => openModal(login)} id="login">
                  Log in
                </button>
                <button onClick={() => openModal(signup)} id="signup">
                  Sign up
                </button>
              </div>
            </nav>
          </div>
          <div className="main-content">
            <div>Get Your Next</div>
            <br />
            <p>
              Architecture idea <br />
              {/* <div className="header-spin-wafel"> */}
              <FontAwesomeIcon
                icon={faStroopwafel}
                spin
                className="faStroopwafel1"
                spin
                size="xs"
              />
              <FontAwesomeIcon
                icon={faStroopwafel}
                spin
                className="faStroopwafel2"
                spin
                size="xs"
              />
              <FontAwesomeIcon
                icon={faStroopwafel}
                spin
                className="faStroopwafel3"
                spin
                size="xs"
              />
            </p>
          </div>

          <section className="seeds-container">
            {/* <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
            transitionLeaveTimeout={300}> */}
              
            <FadeIn delay="50">
            <div className="column1 column" key="1">
              <img src={IMGUtil.img1} alt="modern" />
              <img src={IMGUtil.img24} alt="modern" />
              <img src={IMGUtil.img9} alt="modern" />
              {/* <img sIMGUtil.rc={img36} alt="modern" /> */}
              <img src={IMGUtil.img16} alt="modern" />
              <img src={IMGUtil.img3} alt="modern" />
              <img src={IMGUtil.img23} alt="modern" />
              {/* <img sIMGUtil.rc={img27} alt="modern" /> */}
              <img src={IMGUtil.img26} alt="modern" />
              <img src={IMGUtil.img49} alt="modern" />
              <img src={IMGUtil.img37} alt="modern" />

              {/* <img src={img29} alt="modern" /> */}
              {/* <img src={require({arch1})} alt="arch1" /> */}
            </div>
            </FadeIn>
            
            <FadeIn delay="350">
            <div className="column2 column" key="2">
              <img src={IMGUtil.img7} alt="modern" className="placeholder1" />
              <img src={IMGUtil.img4} alt="modern" />
              <img src={IMGUtil.img28} alt="modern" />
              <img src={IMGUtil.img43} alt="modern" />
              <img src={IMGUtil.img30} alt="modern" />
              <img src={IMGUtil.img39} alt="modern" />
              <img src={IMGUtil.img38} alt="modern" className="strech" />
              <img src={IMGUtil.img6} alt="modern" className="strech" />
            </div>
            </FadeIn>

            <FadeIn delay="650">

            <div className="column3 column"  >
              <img src={IMGUtil.img7} alt="modern" className="placeholder2" />
              <img src={IMGUtil.img8} alt="modern" />
              <img src={IMGUtil.img33} alt="modern" />
              <img src={IMGUtil.img40} alt="modern" />
              <img src={IMGUtil.img41} alt="modern" />
              <img src={IMGUtil.img9} alt="modern" />
              <img src={IMGUtil.img25} alt="modern" />
              <img src={IMGUtil.img42} alt="modern" />
              <img src={IMGUtil.img49} alt="modern" />
            </div>
            </FadeIn>

            <FadeIn delay="950">

            <div className="column4 column" >
              <img src={IMGUtil.img11} alt="modern" className="placeholder3" />
              {/* <img sIMGUtil.rc={img15} alt="modern" /> */}
              <img src={IMGUtil.img55} alt="modern" />
              <img src={IMGUtil.img5} alt="modern" />
              <img src={IMGUtil.img34} alt="modern" />
              <img src={IMGUtil.img31} alt="modern" />
              {/* <img sIMGUtil.rc={img13} alt="modern" /> */}
              <img src={IMGUtil.img50} alt="modern" />
              <img src={IMGUtil.img12} alt="modern" />
              <img src={IMGUtil.img13} alt="modern" />
            </div>

            </FadeIn>

            <FadeIn delay="1250">

            <div className="column5 column" >
              <img src={IMGUtil.img7} alt="modern" className="placeholder2" />
              <img src={IMGUtil.img15} alt="modern" />
              <img src={IMGUtil.img29} alt="modern" />
              <img src={IMGUtil.img36} alt="modern" />
              <img src={IMGUtil.img22} alt="modern" />
              <img src={IMGUtil.img44} alt="modern" />
              <img src={IMGUtil.img46} alt="modern" />
              <img src={IMGUtil.img45} alt="modern" />
            </div>

            </FadeIn>

            <FadeIn delay="1550"> 

            <div className="column6 column" >
              <img src={IMGUtil.img7} alt="modern" className="placeholder1" />
              <img src={IMGUtil.img14} alt="modern" />
              <img src={IMGUtil.img17} alt="modern" />
              <img src={IMGUtil.img35} alt="modern" />
              <img src={IMGUtil.img51} alt="modern" />
              <img src={IMGUtil.img52} alt="modern" />
              <img src={IMGUtil.img39} alt="modern" />
              <img src={IMGUtil.img32} alt="modern" />
              <img src={IMGUtil.img47} alt="modern" />
            </div>

            </FadeIn>

            <FadeIn delay="1850">

            <div className="column7 column" >
              <img src={IMGUtil.img54} alt="modern" />
              <img src={IMGUtil.img19} alt="modern" />
              <img src={IMGUtil.img53} alt="modern" />
              <img src={IMGUtil.img27} alt="modern" />
              <img src={IMGUtil.img2} alt="modern" />
              <img src={IMGUtil.img21} alt="modern" />
              <img src={IMGUtil.img24} alt="modern" />
              <img src={IMGUtil.img18} alt="modern" />
              {/* <img src={IMGUtil.img20} alt="modern" /> */}
            </div>
            </FadeIn>
          </section>
        </header>
      );};

  
  const personalGreeting = () => {
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
          
          <Link to={`/${currentUser.id}`}>
            <button id="go-to-board" >
                  {currentUser.username[0]}
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
            onClick={logout}
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


  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

};

export default Greeting;