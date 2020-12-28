import { update } from 'lodash';
import React from 'react';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props;
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.updateUser(this.state)
        .then(this.props.history('/'));  
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
        const { user } = this.state;
        return(
            <div className='profile-wrapper'>
                <form submit={this.handleSubmit}>
                    <div className='profile-header'>                   
                        <h1>
                            Edit profile
                        </h1>
                        <p>People on Pinterest will get to know you with the info below</p>
                    </div>
                    <div className="profile-body">
                        <div className="profile-img">
                            <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Einstein_tongue.jpg"/>
                            <button>Change</button>
                        </div>
                        <div className="name-wrapper">
                            <div>
                                <p>First name</p>
                                <input type="text" value={user.firstname} onChange={() => update()}/>
                            </div>
                            <div>
                                <p>Surname</p>
                                <input type="text" value={user.lastname} onChange={() => update()}/>
                            </div>
                        </div>
                        
                        <p>Username</p>
                            <input type="text" value={user.username} onChange={() => update()}/>
                        <p>About your profile</p>
                        <textarea placeholder="Write a little bit about yourself here"></textarea>
                        <p>Website URL</p>
                        <input type="text" />
                        <p>Background</p>
                        <input type="text" placeholder="Ex. San Francisco, CA"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditProfileForm;