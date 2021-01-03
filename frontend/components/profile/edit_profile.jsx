import { update } from 'lodash';
import {updateUser} from '../../utils/user_api_util';
import React from 'react';
import FadeIn from "react-fade-in";
import {hide, reveal} from "../../utils/drop_down_util";

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = this.props.user;
    }

    handleSubmit(e) {
        e.presventDefault;
        updateUser(this.state).then(
        () => {           
            reveal('.saved');
            setTimeout(() => {
                hide('.saved');
                location.reload();
                }, 2000
            );

        }
        )  
        // })
    }

    // enableBtns() {
    //     const cancel = document.getElementById('cancel');
    //     const done = document.getElementById('done');
    //     if (!cancel || !done) return;
    //     
    //     if (Object.values(this.state) === Object.values(this.props.user)) {
    //         cancel.disabled = true;
    //         done.disabled = true;
    //     } else {
            
    //         cancel.disabled = false;
    //         done.disabled = false;
    //     }
    // }

    update(field) {   
        return e => {                      
            this.setState({[field]: e.currentTarget.value});    
        }    
    }

    render() {
        const { first_name, last_name, background, description, location, url, photo } = this.state;
        // 
        // const disable = this.state === this.props ? disabled : null ;
        return(
            <div className='profile-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <div className='profile-header'>  
                        <div>                       
                            <h1>
                                Edit profile
                            </h1>
                            <p>People on Pinterest will get to know you with the info below</p>
                        </div>   
                        <div className="profile-edit-btns">
                            <button type="reset" id ="cancel">Cancel</button>
                            <button  id="save" >Done</button>
                            {/* {this.toggleDisabled()} */}
                        </div>              
                    </div>
                    <div className="profile-body">
                        <div className="profile-img">
                            {photo ? <img src={photo}/> :  null} 
                            {/* <button type="button">Change</button> */}
                        </div>
                        <div className="name-wrapper">
                            <div>
                                <p>First name</p>
                                <input type="text" value={first_name} onChange={this.update('first_name')}/>
                            </div>
                            <div>
                                <p>Surname</p>
                                <input type="text" value={last_name} onChange={this.update('last_name')}/>
                            </div>
                        </div>
                        
                        <p>Background image URL</p>
                            <input type="text" value={background} onChange={this.update('background')} />
                        <p>About your profile</p>
                        <textarea 
                            placeholder="Write a little bit about yourself here" 
                            value={description} 
                            onChange={this.update('description')}>
                        </textarea>
                        <p>Website URL</p>
                        <input 
                            type="text"  
                            value={url}
                            onChange={this.update('url')}/>
                        <p>Location</p>
                        <input 
                            type="text" 
                            placeholder="Ex. San Francisco, CA"
                            value={location}
                            onChange={this.update('location')}
                        />
                    </div>
                    
                    {/* <FadeIn delay="300" className="fadeIn"> */}
                    <div className="saved">Profile saved!</div>
                    {/* </FadeIn> */}
                </form>
            </div>
        )
    }
}

export default EditProfileForm;