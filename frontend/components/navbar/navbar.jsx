import React from "react";
import { Link, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faUserCog, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import {createIcon, createSpinIcon, createButtonLink} from '../../utils/graphics.util';


class Navbar extends React.Component{

  render() {
    if (!this.props.currentUser) return null;
    return (
      <hgroup className="header-group">
        <div className="left-nav-icons">
          {createSpinIcon(faStroopwafel, "board-logo", "2x")}
          {createButtonLink("/", "home-link", "board-nav-button", "home-button", "Home")}
          {createButtonLink("/about", "nav-link", "board-nav-button", "today", "today")}
          {createButtonLink("/", "nav-link", "board-nav-button", "following", "Following")}
      </div>
        <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg" />
        <input type="text" placeholder="Search" id="search" />
       <div className="right-nav-icons">
          <Link to="/settings">
            {createIcon(faUserCog, "icon", "2x", "add-pin")}
          </Link>      
          {createButtonLink(`/boards/_saved`, "", "", "go-to-board", this.props.currentUser.username[0])}
          {createIcon(faSignOutAlt, "icon", "2x", "log-out", this.props.logout)}
        </div>
      </hgroup>
    )};

};

export default Navbar;