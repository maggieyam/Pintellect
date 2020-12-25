import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle, faChevronCircleDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import pin_show_container from './pin_show_container';
import { deletePinFromBoard, deletePin } from '../../../utils/pins_api_util';
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

    edit() {
        return(
            <div className="edit-pen-wrapper">
                <FontAwesomeIcon
                    icon={faPen}
                    className="edit-pen"
                    size="lg"
                    onClick={() => openModal(modal)}
                />
            </div>
        )

    }

    render() {
        const {pin, deletePin, id, openModal, user} = this.props;
        debugger
        if (!pin) return null;
        const modal = {type: 'updatePin', item: this.props.pin}
        return(
            <div className="main-container-pin-show">
                <div className="center-container-pin-show" >
                    <div className="left-container-pin-show">
                        {pin ? <img src={pin.link} alt="pins"/> : null}
                    </div>

                    <div className="right-container-pin-show">
                        <div className="right-top-nav">

                            {user.id === pin.author_id ? this.edit() : null}
                            
                            <div className="pin-select-wrapper">
                                <SearchBoard 
                                    boards={pin.boards}
                                    openModal={openModal}
                                    pin={pin}
                                />
                            </div>
                        </div>
                        {this.renderInfo()}                  
                    </div>
                </div>
            </div>
        )
    }
}

export default PinShow;

