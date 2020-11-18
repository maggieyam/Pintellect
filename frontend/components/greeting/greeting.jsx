import React from "react";
import { Link }from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
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
      <section className="main-content group">Get Your Next Idear</section>
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