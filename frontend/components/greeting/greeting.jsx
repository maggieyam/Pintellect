import React from "react";
import { Link, useNavigate, }from "react-router-dom";
import { login } from "../../utils/session_api_util";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faPen, faBell, faCommentDots, faChevronCircleDown, 
  faRocket, faPlusCircle, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
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
    const img1 = "https://i.pinimg.com/originals/4a/7c/86/4a7c86eb4b3df5bfc0e1017fec76feae.jpg";
    const img2 = "https://static.boredpanda.com/blog/wp-content/uploads/2017/11/Bbgp4UGnZ3P-png__880.jpg";
    const img3 = "https://images.dwell.com/photos-6063391372700811264/6623408749045575680-large/the-ground-floor-of-the-a-frame-structure-houses-an-open-plan-dining-area.jpg";
    const img4 = "https://i2-prod.mirror.co.uk/incoming/article11406005.ece/ALTERNATES/s1227b/PAY-Giant-Birds-Nest-In-Kenya-Lets-Safari-Guests-Sleep-Luxuriously-Above-The-Trees.jpg"
    const img5 = "https://media.paperblog.fr/i/641/6412623/performing-arts-center-high-line-new-york-L-ug4PGA.jpeg";
    const img6 = "https://cdn.ebaumsworld.com/2018/12/13/103716/85835653/00bcc44797594895f122fe26e4a1b204.jpg";
    const img7 = "https://nsc.edu/wp-content/uploads/2018/02/blank-image-placeholder.png";
    const img8 = "http://images.huffingtonpost.com/2014-02-14-TschuggenBergoase_SPA3.jpg";
    const img9 = "https://media.architecturaldigest.com/photos/56a026f0f62777972f2fdf6c/master/w_1600%2Cc_limit/architectural-landmarks-los-angeles-02.jpg";
    const img10 = "https://www.totallandscapecare.com/wp-content/uploads/sites/5/2015/08/rolex-building2.jpg";
    const img11 = "https://nsc.edu/wp-content/uploads/2018/02/blank-image-placeholder.png";
    const img12 = "https://i.dailymail.co.uk/i/pix/2017/04/28/08/3FAB39F800000578-0-The_Heal_Berg_Reverse_Climate_Changing_Machine_was_designed_by_L-a-51_1493363861216.jpg";
    const img13 = "https://mymodernmet.com/wp/wp-content/uploads/archive/muY1Q3B4kIodjYWvqT2l_1082106231.jpeg";
    const img14 = "https://i.pinimg.com/originals/a1/60/5b/a1605b70ffab15fff3abaae2d8d57ab8.jpg"
    const img15 = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/enlightenment-john-galbo.jpg";
    const img16 = "https://farm4.static.flickr.com/3394/3191097011_460ded47de.jpg";
    const img17 = "https://media.architecturaldigest.com/photos/56a0270a883e5aaf0648d1f2/master/w_1600%2Cc_limit/architectural-landmarks-los-angeles-23.jpg";
    const img18 = "https://i.pinimg.com/originals/58/a7/07/58a707abd66f1149b93577d0e615b766.jpg";
    const img19 = "https://images.adsttc.com/media/images/5343/2876/c07a/8091/a000/01bf/large_jpg/952-04_05_sc_v2com.jpg?1396910188";
    const img20 = "https://images.adsttc.com/media/images/591d/a084/e58e/cef3/1700/0039/slideshow/Edoardo_Tresoldi_-_Abu_Dhabi_%C2%A9Roberto_Conte_1.jpg?1495113855";
    const img21 = "https://media.architecturaldigest.com/photos/56a02704883e5aaf0648d1ee/master/w_1600%2Cc_limit/architectural-landmarks-los-angeles-17.jpg";
    // window.addEventListener('scroll', () => openModal(signup));
    
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
          <div className="column1 column">
            <img src={img1} alt="modern" />
            <img src={img2} alt="modern" />
            <img src={img3} alt="modern" />
          </div>

          <div className="column2 column">
            <img src={img7} alt="modern" className="placeholder1" />
            <img src={img4} alt="modern" />
            <img src={img5} alt="modern" />
            <img src={img6} alt="modern"/>
          </div>

          <div className="column3 column">
            <img src={img7} alt="modern" className="placeholder2" />
            <img src={img8} alt="modern" />
            <img src={img9} alt="modern" />
            <img src={img10} alt="modern" />
          </div>

          <div className="column4 column">
            <img src={img11} alt="modern" className="placeholder3"/>
            <img src={img12} alt="modern" />
            <img src={img13} alt="modern"/>
          </div>

          <div className="column5 column">
            <img src={img7} alt="modern" className="placeholder2"/>
            <img src={img15} alt="modern"/>
            <img src={img16} alt="modern"/>
          </div>

          <div className="column6 column">
            <img src={img7} alt="modern" className="placeholder1"/>
            <img src={img14} alt="modern"/>

            <img src={img17} alt="modern"/>

            <img src={img18} alt="modern" />
          </div>

          <div className="column7 column">
            <img src={img19} alt="modern" />
            <img src={img20} alt="modern" />
            <img src={img21} alt="modern"/>
          </div>
        </section>
      </header>
    );};

  
  const personalGreeting = () => {
    const create = {type: 'create'};
    const update = {type: 'update', item: {title: 'Space', id:'64'}};

    return (
      <hgroup className="header-group">
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
       
        <FontAwesomeIcon
          icon={faBell}
          id="bell"
          className="icon"
          size="2x"
          // onClick={redirect}
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
        {/* <FontAwesomeIcon
          icon={faPlusCircle}
          className="icon"
          id="modal-create"
          size="2x"
          onClick={() => openModal(create)}
        /> */}

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


  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();

};

export default Greeting;