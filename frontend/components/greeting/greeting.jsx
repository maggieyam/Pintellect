import React from "react";
import { Link, useNavigate, }from "react-router-dom";
import { login } from "../../utils/session_api_util";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faPen, faBell, faCommentDots, faChevronCircleDown, 
  faRocket, faPlusCircle, faSignOutAlt, faBorderAll} from '@fortawesome/free-solid-svg-icons';
import { fetchBoards } from "../../actions/boards_actions";
import BoardIndexItem from "../boards/index/board_index_item";
const Greeting = ({ currentUser, logout, openModal, }) => {
  // const action = (e) => {
  //   e.preventDefault();
  //     const user = {email: 'einstein@gmail.com', password: '123456'};
  //     this.props.login(user).then(() => closeModal());
  // }
  const sessionLinks = () => {
    const signup = {type: 'signup'};
    const login = ({type: 'login'});
    return (
    <header className="group">
      <div className="main-nav">
        <nav className="left-nav">
          {/* <FontAwesomeIcon icon={faRocket} className="bounce" size="lg" /> */}
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
            {/* <button onClick={e => action(e)} id="signin">
              Demo User
            </button> */}
          </div>
        </nav>
      </div>
      <section className="main-content group">
        <div>Get Your Next</div>
        <br />
        <p>Architecture idea</p>
      </section>

      <section className="seeds-container">
        <div className="coloumn1">
          <img
            src="https://i.pinimg.com/originals/4a/7c/86/4a7c86eb4b3df5bfc0e1017fec76feae.jpg"
            alt="modern"
          />
          <img
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/11/Bbgp4UGnZ3P-png__880.jpg"
            alt="modern"
          />
        </div>
        <div className="coloumn2">
          <h1 className="placeholder"> </h1>
          <img
            src="https://media.paperblog.fr/i/641/6412623/performing-arts-center-high-line-new-york-L-ug4PGA.jpeg"
            alt="modern"
            id="descend-30"
          />
          <img
            src="https://cdn.ebaumsworld.com/2018/12/13/103716/85835653/00bcc44797594895f122fe26e4a1b204.jpg"
            alt="modern"
            id="descend-30"
          />
        </div>
        <div className="coloumn3">
          <h2 className="placeholder"> </h2>

          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/enlightenment-john-galbo.jpg"
            alt="modern"
          />
        </div>

        <div className="coloumn4">
          <img
            src="http://hd.wallpaperswide.com/thumbs/modern_architecture-t2.jpg"
            alt="modern"
          />

          <img
            src="https://i.dailymail.co.uk/i/pix/2017/04/28/08/3FAB39F800000578-0-The_Heal_Berg_Reverse_Climate_Changing_Machine_was_designed_by_L-a-51_1493363861216.jpg"
            alt="modern"
          />
        </div>
        <div className="coloumn5">
          <h1></h1>
          <img
            src="https://www.totallandscapecare.com/wp-content/uploads/sites/5/2015/08/rolex-building2.jpg"
            alt="modern"
          />
          <img
            src="https://farm4.static.flickr.com/3394/3191097011_460ded47de.jpg"
            alt="modern"
          />
        </div>
        <div className="coloumn6">
          <img
            src="https://i.pinimg.com/originals/a1/60/5b/a1605b70ffab15fff3abaae2d8d57ab8.jpg"
            alt="modern"
          />
          <img
            src="https://images.adsttc.com/media/images/5343/2876/c07a/8091/a000/01bf/large_jpg/952-04_05_sc_v2com.jpg?1396910188"
            alt="modern"
          />
        </div>
        {/* <div className="coloumn7">
          <img
            src="https://farm4.static.flickr.com/3394/3191097011_460ded47de.jpg"
            alt="modern"
          />
          <img
            src="https://farm4.static.flickr.com/3394/3191097011_460ded47de.jpg"
            alt="modern"
          />
        </div> */}
      </section>
    </header>
  )};

  
  const personalGreeting = () => {
    const create = {type: 'create'};
    const update = {type: 'update', item: {title: 'Space', id:'64'}};
    // const redirect = () => {
    //   // return <Redirect to={`/${currentUser.id}`} />;
    //   return useNavigate(`/${currentUser.id}`);
    // }
    return (
      <hgroup className="header-group" width="100%">
        {/* <section className="left-nav-index"> */}
        <FontAwesomeIcon icon={faRocket} spin className="logo" size="2x" />
        <button className="board-nav-button" id="home-button">
          <Link to="/" id="home-link">
            Home
          </Link>
        </button>

        <button className="board-nav-button" id="today">
          <Link to="/" id="nav-link">
            Today
          </Link>
        </button>

        <button className="board-nav-button" id="following">
          <Link to="/" id="nav-link">
            Following
          </Link>
        </button>
        {/* </section> */}
        {/* <div> */}
        <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg" />
        <input type="text" placeholder="      Search" id="search" />
        {/* </div> */}

        {/* <i class="fa fa-user icon">
          </i>
          </input> */}
        {/* <div className="right-index-nav"> */}
        {/* <section className="right-nav-index"> */}
        <FontAwesomeIcon
          icon={faBell}
          id="bell"
          className="icon"
          size="2x"
          onClick={redirect}
        />
        <FontAwesomeIcon
          icon={faCommentDots}
          className="icon"
          id="comment"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faChevronCircleDown}
          className="drop-down-icon"
          size="2x"
        />
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="icon"
          id="modal-create"
          size="2x"
          onClick={() => openModal(create)}
        />

        <FontAwesomeIcon
          icon={faPen}
          id="edit-board"
          className="icon"
          size="2x"
          onClick={() => openModal(update)}
        />

        <FontAwesomeIcon
          icon={faSignOutAlt}
          id="log-out"
          className="icon"
          onClick={logout}
          size="2x"
        />
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
      // BoardShow


  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

};

export default Greeting;