import React from "react";



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      age: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAge = this.renderAge.bind(this);
    //this.demoUser = this.demoUser.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
    // .then(() => this.props.history.push('/pins'));
  }

  // demoUser(e){
  //   e.preventDefault();
  //   const user = {
  //                 email: "einstein@gmail.com", 
  //                 password: "123456",
  //                 }
  //   this.props.login(user).then(() => this.props.closeModal());
  // }


  renderAge() {      
      return (
        <input type='text' 
        value={this.state.age} 
        placeholder='Age'
        onChange={this.handleInput('age')}/>
      )                                 
  }

  handleDemo(e) {
    e.preventDefault();
    
    const user = { email: "einstein@gmail.com", password: "123456" };
    this.props.login(user).then(() => this.props.closeModal());
  }

  render() {
      const { email, password} = this.state;

      return (
        <div className="session-forms">
          <h3 className="greeting">Welcome to Pintellect</h3>
          <h3 className="find-subject">find new subject to explore</h3>
          <form onSubmit={this.handleSubmit} className="forms">
            <input
              type="email"
              value={email}
              placeholder="    Email"
              onChange={this.handleInput('email')}
              className="input-session"
            />
            <br />

            <input
              type="password"
              value={password}
              placeholder="    Password"
              onChange={this.handleInput('password')}
              className="input-session"
            />
            <br />
            <p id="error">{this.props.errors ? this.renderErrors() : null}</p>  
            {this.props.submitButton === 'Continue' ? this.renderAge() : null}
            <button id="modal-button">{this.props.submitButton}</button>
            <div id="bottom-session>">
              <br />

              <span>
                <p id="agreement">By continuing, you agree to Pinterest's</p>
                <strong id="terms-of-service">
                  Terms of Service, Privacypolicy.
                </strong>
              </span>
              <div onClick={() => this.props.openModal()}>
              {this.props.navLinkText}
             </div>
           </div>           
          </form>
          <button id="demo-button" onClick={(e) => this.handleDemo(e)}>
            Demo
          </button>
        </div>
      );
    }

  renderErrors() {
    return (
      <div>
          {this.props.errors.map((error, i) => (
            <div>
              <span key={`error-${i}`} className="error-message">{error}</span>
              <br/>
            </div>
          ))}
      </div>
    );
  }
}

export default SessionForm;
