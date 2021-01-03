import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle, faChevronCircleDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import pin_show_container from './pin_show_container';
// import { deletePinFromBoard, deletePin } from '../../../actions/pins_actions';
import {createFollow, deleteFollow} from '../../../utils/pins_api_util';
import SearchBoard from '../../search/search_board';

class PinShow extends React.Component {
    constructor(props){
        super(props);
   
    }

    componentDidMount() {    
        window.scrollTo(0, 0);
        this.props.requestPin(this.props.id);
    }

    toggleFollow(e, followers) {
        e.preventDefault();
        const {pin, currentUser} = this.props;
        
        if(!followers.includes(currentUser.id)) {
            createFollow(pin.author_id, currentUser.id, pin.id)
            .then(() => location.reload())
        } else {
            deleteFollow(pin.author_id, currentUser.id, pin.id)
            .then(() => location.reload())
        }
        
    }

    renderInfo() {       
        const { pin, currentUser, user } = this.props;
        if (!pin) return null;

        const followers = user.followers || [];
        const followersNum = followers.length;
        
        return(
            <div className="main-content-pin">
                <div id="pin-show-header">
                    <h3>{pin.title}</h3>
                    <a href={`${pin.url}`}>{pin.url}</a>
                    <div>{pin.description}</div> 
                </div>
                <div id="name-wrapper">
                    <div id="names">
                        <button className="user-initial">
                            {user.first_name[0]}
                        </button>
                        
                        <div id="display-names">
                            <strong>
                                {user.first_name} {user.last_name}
                            </strong>
                            <p>{followersNum}  {followersNum === 1 ? 'follower' : 'followers'}</p>
                        </div>
                    </div>
                    {currentUser.id !== user.id ? <button id="follow-btn" onClick={(e) => this.toggleFollow(e, followers)}>
                        {followers.includes(currentUser.id) ? 'following' : 'follow'}
                    </button> : null}
                    
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

