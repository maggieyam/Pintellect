import React from "react";
import { Link, Redirect}from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,  faUserCog, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import {createIcon, createSpinIcon, createButtonLink} from '../../utils/graphics.util';
import SearchPin from '../search/search_pin'
import { faAngellist, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import Pdf from '../../../app/assets/pdf/Maggie_Yan_Resume.pdf';
class Navbar extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     keywords: "",
  //   }
  // }
  // componentDidMount() {
  //   this.props.requestPins();
  // }
  // update() {
  //   return e => {
  //       e.preventDefault();
  //       this.setState({keywords: e.currentTarget.value})
  //   }
  // }

  // onKeyEnter() {
  //   return e => 
  //     e.key === 'Enter' ? <SearchPin pins={this.props.pins} col={this.state.cols} keywords={this.state.keywords}/> : null;
  // }

  // searchBar() {
  //   return(
  //     <>
  //       <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg"/>
  //       <div onKeyPress={this.onKeyEnter()} id="search-container">
  //         <input type="text" placeholder="Search"  value={this.state.keywords} onChange={this.update()} id="search"/>
  //       </div>
  //     </>
  //   )
  // }

  // reset() {
  //   filter(this.props.pins, "");
  //   this.setState({keywords: ""});
  // }

  render() {
    if (!this.props.currentUser) return null;

    return (
      <hgroup className="header-group">
        <div className="left-nav-icons">
          {createSpinIcon(faStroopwafel, "board-logo", "2x")}
           <Link to='/' id="home-link" >
            <button className="board-nav-button" id="home-button">
                Home
            </button>
          </Link>      
          {/* <a href="https://docs.google.com/document/d/1mXrwXsINH_csdULet5zCpTn5lCkAeROYRiZhb_k1qzQ/edit?usp=sharing" target="_blank" id="nav-link">
            <button className="board-nav-button" id="today">
              Resume
            </button> 
          </a>  */}
          <a href="https://maggieyam.github.io" target="_blank" id="nav-link">
            <button className="board-nav-button" id="following">
              Portfolio
            </button> 
          </a> 
          {/* {createButtonLink("https://www.linkedin.com/in/maggie-yan-0a32056a/", "nav-link", "board-nav-button", "today", "Resume")} */}
          {/* {createButtonLink("/", "nav-link", "board-nav-button", "following", "LinkedIn")} */}
      </div>

      {/* {this.props.location.pathname === '/' ? this.searchBar() : null} */}
        
       <div className="right-nav-icons">
               
          {/* {createButtonLink(`/${this.props.currentUser.username}/_saved`, "", "", "go-to-board", this.props.currentUser.username[0])} */}
          {/* <a src=""><img src=""/></a> */}
          <a href="https://www.linkedin.com/in/maggie-yan-0a32056a/" target="_blank">{createIcon(faLinkedin, "icon", "2x", "linkedIn")}</a>
          <a href="https://angel.co/u/maggie-yan" target="_blank">{createIcon(faAngellist, "icon", "2x", "")}</a>
          <Link to={`/${this.props.currentUser.username}/_saved`} >
            <button id='go-to-board'>
                {this.props.currentUser.username[0]}
            </button>
          </Link>
          <Link to="/settings">
            {createIcon(faUserCog, "icon", "2x", "add-pin")}
          </Link> 
          {createIcon(faSignOutAlt, "icon", "2x", "log-out", this.props.logout)}
        </div>
      </hgroup>
    )};

};

export default Navbar;