import React from "react";
import { Link } from "react-router-dom";

const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
);

  export default personalGreeting;
