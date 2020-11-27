import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';
import pin_show_container from './pin_show_container';


class PinShow extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount() {
        this.props.requestPin(this.props.id);
    }

    renderInfo() {
        if (!this.props.pin) return null;
        
        const {title, description} = this.props.pin;
        return(
            <div className="main-content-pin">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        )
    }

 toggle() {
      let button = document.querySelector("#select");
      let dropDown = document.querySelector('#dropDown-content');
      
      button.addEventListener('click', () => {
        if (dropDown.style.display === "none") {
          dropDown.style.display = 'block';
        } else {
          dropDown.style.display = 'none';
        }
  })
 }

boardSelectBtn(boards) {
    return(
        <div id="nav-right-pin-form">
            <div id="nav-right-btns">
            <div id="select" onClick={this.toggle.bind(this)}>
                {boards[0] ? `${boards[0].title}` : 'Select'}
                <FontAwesomeIcon
                icon={faChevronCircleDown}
                id="svg-pin-drop-down"
                size="lg"
                onClick={this.toggle.bind(this)}
                />
            </div>
            <button className="save" >Save</button>
            </div>
        </div>
    )}

    render() {
        const {pin, id, fetchBoards} = this.props;
        const boards = Object.values(fetchBoards());
        return(
            <div className="main-container">
                <div className="center-container" >
                    <div className="left-container-pin-show">
                        {pin ? <img src={pin.link} alt="pins"/> : null}
                    </div>

                    <div className="right-container-pin-show">
                        {this.renderInfo()}
                        {this.boardSelectBtn(boards)}
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow;

