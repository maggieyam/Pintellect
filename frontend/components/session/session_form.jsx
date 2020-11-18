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

renderAge() {      
    return (
      <input type='text' 
      value={this.state.age} 
      placeholder='Age'
      onChange={this.handleInput('age')}/>
    )                                 
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
                placeholder="Email"
                onChange={this.handleInput("email")}
              />
              <br />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={this.handleInput("password")}
              />
              <br />
              {this.props.submitButton === "Continue" ? this.renderAge() : null}
              {this.props.errors ? this.errors : null}
              <br />
              <button id='modal-button'>{this.props.submitButton}</button>
              <span>
                <p id="agreement">
                  By continuing, you agree to Pinterest's
                </p>
                <strong id="terms-of-service">
                  Terms of Service, Privacypolicy.
                </strong>
              </span>
              <div onClick={()=>this.props.openModal()}>{this.props.navLinkText}</div>
            </form>
          </div>
        );
    }

//   renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>{error}</li>
//         ))}
//       </ul>
//     );
//   }
}

export default SessionForm;
