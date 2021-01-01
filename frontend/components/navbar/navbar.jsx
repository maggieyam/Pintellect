import React from "react";
import { Link, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faUserCog, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import {createIcon, createSpinIcon, createButtonLink} from '../../utils/graphics.util';
// import PinIndexContainer from "../pins/pins_index/pins_index_container";


class Navbar extends React.Component{
  // componentDidMount() {
  //   this.props.requestPins();
  //   this.state = {
  //     keywords: ''
  //   }
  // }

  // filter() {   
  //   let allPins = Object.values(this.props.pins)
  //   for (let pin of allPins) {
  //     const description = pin.description.toLowerCase().split(' ');
  //     const title = pin.title.toLowerCase().split(' ');
  //     const keywords = this.state.keywords.toLowerCase().split(' ');
  //     for (let keyword of keywords) {
  //       let option = document.querySelector(`.pin-${pin.id}`);
  //       if (description.includes(keyword.toLowerCase()) || title.includes(keyword.toLowerCase())) {
  //         option.style.display = 'flex';       
  //       } else {
  //         option.style.display = 'none';
  //       }
  //     }     
  //   }   
  // }

  // update() {
  //   return e => {
  //       e.preventDefault();
  //       this.setState({keywords: e.currentTarget.value})
  //   }
  // }

  // onKeyEnter() {
  //   debugger
  //   return e => 
  //     e.key === 'Enter' ? this.filter() : null;
  // }

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