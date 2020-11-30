import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faPen, faBell, faCommentDots, faChevronCircleDown, 
  faRocket, faPlusCircle, faSignOutAlt, faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router-dom";
import { fetchBoards } from "../../utils/boards_api_util";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      age: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAge = this.renderAge.bind(this);
    //this.demoUser = this.demoUser.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  
    const user = Object.assign({}, this.state);
    const props = this.props;
    this.props.processForm(user)
      .then(() => this.props.closeModal())
      .then(() => {        
        props.history.push(`/`)});
  }

  componentDidUpdate(prevProps){ 
  // Typical usage (don't forget to compare props): 
    if (this.props.userId !== prevProps.userId) {
    this.fetchData(this.props.userId);
    console.log(this.props);
  }

  }

  renderAge() {
    return (
      <input
        type="text"
        value={this.state.age}
        placeholder="Age"
        onChange={this.handleInput('age')}
        className="input-session"
      />
    );
  }



  handleDemo(e, num) {
    e.preventDefault();
    let user = {};
    if (num === 1){
      user = {email: 'einstein@gmail.com', password: '123456'};
    } else {
      user = {email: 'picasso@gmail.com', password: '123456'};
    }    
    this.props.login(user)
    .then(() => this.props.closeModal())
    // .then(this.componentDidUpdate())
    // .then(() => this.props.history.push('/'));
  }

  render() {
    const {email, password} = this.state;

    return (
      <div className="session-forms">
        <FontAwesomeIcon icon={faStroopwafel} spin className="logo" size="2x" />
        <h3 className="greeting">Welcome to Pintellect</h3>
        <h3 className="find-subject">Find new subject to explore</h3>
        <form onSubmit={this.handleSubmit} className="forms">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={this.handleInput('email')}
            className="input-session"
          />
          <br />

          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.handleInput('password')}
            className="input-session"
          />
          <br />

          <div id="error">{this.props.errors ? this.renderErrors() : null}</div>

          <div >
            {this.props.submitButton === 'Continue' ? this.renderAge() : null}
          </div>
          <button id="modal-button">{this.props.submitButton}</button>
          {/* <button id="modal-button">{this.props.submitButton}</button> */}
        </form>
        {/* {this.props.submitButton === 'Log in' ? this.showDemoButton() : null} */}
        {this.showDemoButton()}
        {this.showText()}
      </div>
    );
  }

  showDemoButton() {
    return (
      <>
        <div className="demo-btns">
          {this.props.submitButton === 'Log in' ? <h3>OR</h3> : null}
          <button id="demo-button1" onClick={(e) => this.handleDemo(e, 1)}>
            {/* <FontAwesomeIcon icon={faFacebook} id="facebook" size="lg" /> */}
            Demo Einsten
          </button>
          <button id="demo-button2" onClick={(e) => this.handleDemo(e, 2)}>
            Demo Picasso
          </button>
        </div>      
      </>
    );
  }

  showText() {
    return( 
    <div id="session-form-text">
      <span>
        <p id="agreement">By continuing, you agree to Pinterest's</p>
        <strong id="terms-of-service">Terms of Service, Privacypolicy.</strong>
      </span>

      <div onClick={() => this.props.openModal()} id="session-link">
        {this.props.navLinkText}
      </div>
    </div>
    )
  }

  renderErrors() {
    return (
      <div>
        {this.props.errors.map((error, i) => (
          <div>
            <span key={`error-${i}`} className="error-message">
              {error}
            </span>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default SessionForm;
