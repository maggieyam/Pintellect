import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPen,
  faBell,
  faCommentDots,
  faTrashAlt,
  faChevronCircleDown,
  faRocket,
  faPlusCircle,
  faSignOutAlt,
  faBorderAll,
  faDotCircle,
  faArrowAltCircleUp,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

class CreatePinForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            link: ""
        }
        this.baseState = this.state;
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault;

        const pin = Object.assign({}, this.state);
        
        this.props.createPin(pin);
        console.log(pin);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    reset() {
        return () => this.setState(this.baseState);
    }
    
    // showDetail(){
    //     return (
    //         <p className="note">
    //             Your first 40 characters are what usually show up in feeds 100
    //         </p>           
    //     )
        
    // }

    render(){
        const { title, description, link } = this.state;
        const { first_name, last_name } = this.props.user;
        
        return (
          <div id="body-container">
            <div id="body-section">
              <div>
                <form onSubmit={this.handleSubmit} id="pin-create-form">
                  <div id="top-bar">
                    <div id="dots-pin-form">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        size="lg"
                        id="svg-pin-form-reset"
                        onClick={this.reset()}
                      />
                    </div>

                    <div id="nav-right-pin-form">
                      <button id="select" value="board name">
                        Select
                        <FontAwesomeIcon
                          icon={faChevronCircleDown}
                          id="svg-pin-drop-down"
                          margin-left="0"
                          size="1x"
                        />
                      </button>
                      <button className="save">Save</button>
                    </div>
                  </div>

                  <div id="pin-form-body">
                    <div id="create-pin-left">
                      <div id="upload-img">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleUp}
                          id="svg-pin-form"
                          margin-left="0"
                          size="2x"
                        />
                      </div>

                      <button id="save-from-site">Save from Site</button>
                    </div>

                    <div id="create-pin-right">
                      <div id="add-title">
                        <input
                          type="text"
                          id="input-form-pins"
                          value={title}
                          placeholder={'Add your title'}
                          onChange={this.update('title')}
                        />
                        <div id="names">
                          <p id="pin-inital">{first_name[0]}</p>
                          <p>
                            {first_name} {last_name}
                          </p>
                        </div>

                        <input
                          placeholder="Tell everyone what your pin is about"
                          id="input-pin"
                          value={description}
                          onChange={this.update('description')}
                        />
                        {/* <p>
                          People will usually see the first 50 characters when
                          they click on your pin
                        </p> */}
                      </div>
                      <input
                        placeholder="Add a desination link"
                        id="choose-link"
                        value={link}
                        onChange={this.update('link')}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default CreatePinForm;