import React from "react";
import { Link, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faUserCog, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import {createIcon, createSpinIcon, createButtonLink} from '../../utils/graphics.util';
// import PinIndexContainer from "../pins/pins_index/pins_index_container";
import {filter} from '../search/search_pin'

class Navbar extends React.Component{

  update() {
    return e => {
        e.preventDefault();
        this.setState({keywords: e.currentTarget.value})
    }
  }

  onKeyEnter() {
    return e => 
      e.key === 'Enter' ? filter(this.props.pins, this.state.keywords) : null;
  }

  searchBar() {
    return(
      <>
        <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg"/>
        <div onKeyPress={this.onKeyEnter()} id="search">
          <input type="text" placeholder="Search"  onChange={this.update()} id="search-input"/>
        </div>
      </>
    )
  }

  render() {
    if (!this.props.currentUser) return null;
    return (
      <hgroup className="header-group">
        <div className="left-nav-icons">
          {createSpinIcon(faStroopwafel, "board-logo", "2x")}
          {createButtonLink("/", "home-link", "board-nav-button", "home-button", "Home")}        
          {createButtonLink("https://www.linkedin.com/in/maggie-yan-0a32056a/", "nav-link", "board-nav-button", "today", "Resume")}
          {createButtonLink("/", "nav-link", "board-nav-button", "following", "LinkedIn")}
      </div>
      {this.props.location.pathname === '/' ? this.searchBar() : null}
        
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