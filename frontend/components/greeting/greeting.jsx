import React from "react";
import { Link }from "react-router-dom";
import {a1} from "../../../app/assets/images/architecture/a1.jpg"

const Greeting = ({ openModal }) => {
  const sessionLinks = () => (
    <header className="group">
      <div className="main-nav">
        <nav className="left-nav">
          <Link to="/">
            <ul>home</ul>
          </Link>
        </nav>

        <nav className="right-nav">
          <div className="login-signup">
            <button onClick={() => openModal("login")} id="login">
              Log in
            </button>
            <button onClick={() => openModal("signup")} id="signup">
              Sign up
            </button>
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
  );

  


//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
    return sessionLinks();
};

export default Greeting;