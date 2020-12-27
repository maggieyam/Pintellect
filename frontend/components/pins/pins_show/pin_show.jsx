import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle, faChevronCircleDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import pin_show_container from './pin_show_container';
// import { deletePinFromBoard, deletePin } from '../../../actions/pins_actions';
import SearchBoard from '../../search/searchBoard';

class PinShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {    
        window.scrollTo(0, 0);
        this.props.requestPin(this.props.id);
    }

    renderInfo() {       
        if (!this.props.pin) return null;
        const { pin, user } = this.props;
        return(
            <div className="main-content-pin">
                <div>
                   <h3>{pin.title}</h3>
                   <span>{pin.description}</span> 
                </div>
                <div id="names">
                    <button className="user-initial">
                        {user.first_name[0]}
                    </button>
                    
                    <div id="display-names">
                        <strong>
                            {user.first_name} {user.last_name}
                        </strong>
                        <p>0 follower</p>
                    </div>
                </div>
            </div>

        )
    }

    rightNav() {
        const {pin, openModal, boards} = this.props;
        const modal = {type: 'updatePin', item: {pin: this.props.pin, boards: this.props.boards}}
        return(
            <div className="right-top-nav">
                <div className="edit-pen-wrapper" onClick={() => openModal(modal)}>
                    <FontAwesomeIcon
                        icon={faPen}
                        className="edit-pen"
                        size="lg"
                    />
                </div>

                <div className="pin-select-wrapper">
                    <SearchBoard 
                        boards={Object.values(boards)}
                        openModal={openModal}
                        pin={pin}
                    />
                </div>
            </div>
        )
    }

    render() {
        const { pin } = this.props;       
        if (!pin) return null;
        return(
            <div className="main-container-pin-show">
                <div className="center-container-pin-show" >
                    <div className="left-container-pin-show">
                        {pin ? <img src={pin.link} alt="pins"/> : null}
                    </div>

                    <div className="right-container-pin-show">
                        {this.rightNav()}
                        {this.renderInfo()}                  
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow;

