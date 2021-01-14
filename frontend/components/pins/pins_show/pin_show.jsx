import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import pin_show_container from './pin_show_container';
// import { deletePinFromBoard, deletePin } from '../../../actions/pins_actions';
// import {createFollow, deleteFollow} from '../../../utils/pins_api_util';
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
            this.props.createFollow(pin.author_id, currentUser.id, pin.id);
        } else {
            this.props.deleteFollow(pin.author_id, currentUser.id, pin.id);
        }
        
    }

    renderInfo() {       
        const { pin, currentUser, users } = this.props;
        if (!pin) return null;
        const author = users[pin.author_id];
        if (!author) return null;
        const followers = author.followers || [];
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
                            {author.first_name[0]}
                        </button>
                        
                        <div id="display-names">
                            <strong>
                                {author.first_name} {author.last_name}
                            </strong>
                            <p>{followersNum}  {followersNum === 1 ? 'follower' : 'followers'}</p>
                        </div>
                    </div>
                    {currentUser.id !== author.id ? <button id="follow-btn" onClick={(e) => this.toggleFollow(e, followers)}>
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
                {pin.author_id === this.props.currentUser.id ? 
                <div className="edit-pen-wrapper" onClick={() => openModal(modal)}>
                    <FontAwesomeIcon
                        icon={faPen}
                        className="edit-pen"
                        size="lg"
                    />
                </div> : null}
                

                <div className="pin-select-wrapper">
                    {/* <p id="pin-error-msg2">Please select or create a board!</p> */}
                    <SearchBoard 
                        boards={Object.values(boards)}
                        openModal={openModal}
                        pin={pin}
                        msg={true}
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

