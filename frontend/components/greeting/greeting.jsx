import React from "react";
import { Link }from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import * as IMGUtil from '../../utils/image_util';
import FadeIn from "react-fade-in";
import { createSpinIcon } from '../../utils/graphics.util';

class Greeting extends React.Component{

  leftNav() {
    return(
      <nav className="left-nav">
        {createSpinIcon(faStroopwafel, "logo", "lg")}
        <h3 id="board-nav-header">Pintellect</h3>
      </nav>
    )
  }

  rightNav() {
    const signup = {type: 'signup'};
    const login = ({type: 'login'});
    return(
      <nav className="right-nav">
        <div className="right-nav-items">
          <Link to="/about" className="link-nav">About</Link>
          <button onClick={() => this.props.openModal(login)} id="login">
            Log in
          </button>
          <button onClick={() => this.props.openModal(signup)} id="signup">
            Sign up
          </button>
        </div>
      </nav>
    )
  }

  drawColumns(images, className, col) {
    return (
      <div className={className} key={col}>
        {col === 1 || col === 7 ? null : 
          <img src={IMGUtil.img7} 
          alt="modern" className={`placeholder${col - 1} column`}/>
        }
        {images.map((image,idx) =>        
          <img src={image} alt="modern" key={idx}/>
        )}
      </div>
    )
  }

  render() { 
    if (this.props.currentUser) return null;
    return (
        <header className="group">  
         <div className="main-nav">
             {this.leftNav()}
             {this.rightNav()}           
          </div>       

          <div className="main-content">
            <div>Get Your Next</div><br />
            <p>Architecture idea</p>
            {['1','2','3'].map((num,idx) => 
            <FontAwesomeIcon
              icon={faStroopwafel}
              spin
              className={`faStroopwafel${num}`}
              size="xs"
              key={idx}
            />
              )}
          </div>

          <div className="seeds-container"> 
            {IMGUtil.images.map((colImages, idx) => {
              return(
                <FadeIn delay={`${50 + idx * 300}`} key={idx}>                  
                  {this.drawColumns(colImages, `column`, idx + 1)}
                </FadeIn>
              )              
            })}           
          </div>
          
        </header>
      )};
};

export default Greeting;