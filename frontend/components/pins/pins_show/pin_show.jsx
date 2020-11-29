import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle, faChevronCircleDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import pin_show_container from './pin_show_container';
import { deletePin } from '../../../utils/pins_api_util';


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
                <div>
                   <h3>{title}</h3>
                   <span>{description}</span> 
                </div>
                
            </div>

        )
    }

//  toggle() {
//     //   let button = document.querySelector("#select");
//       let dropDown = document.querySelector('#dropDown-content-show');
      
//     //   button.addEventListener('click', () => {
//         if (dropDown.style.display === "none") {
//           dropDown.style.display = 'block';
//         } else {
//           dropDown.style.display = 'none';
//         }
//     // })
//     }

    // boardSelectBtn(boards) {
    //   return(
    //         <div id="nav-right-btns">
    //         <div id="select" onClick={this.toggle.bind(this)}>
    //             {boards && boards[0] ? `${boards[0].title}` : 'Select'}
    //             <FontAwesomeIcon
    //             icon={faChevronCircleDown}
    //             id="drop-down-pin-show"
    //             size="lg"
    //             onClick={this.toggle.bind(this)}
    //             />
    //         </div>
    //         <button className="save" >Save</button>
    //         </div>
    // )}

    render() {
        const {pin, deletePin, id} = this.props;
        if (!pin) return null;
        
        // const boards = Object.values(fetchBoards());
        return(
            <div className="main-container-pin-show">
                <div className="center-container-pin-show" >
                    <div className="left-container-pin-show">
                        {pin ? <img src={pin.link} alt="pins"/> : null}
                    </div>

                    <div className="right-container-pin-show">
                        <div className="right-top-nav">
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                id="svg-pin-drop-down"
                                size="2x"
                                onClick={() => deletePin(id)}
                            />
                            {/* {this.boardSelectBtn(boards)} */}
                        </div>
                        {this.renderInfo()}                  
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow;

