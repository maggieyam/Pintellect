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
    // const user = Object.assign({}, this.state);
    this.props.processForm(this.state);//.then(this.props.closeModal);
    // .then(() => this.props.history.push('/pins'));
  }

renderAge() {      
    return (
        <label>Age
            <input type='text' 
            value={this.state.age} 
            placeholder='Age'
            onChange={this.handleInput('age')}/>
        </label> 
    )                                 
}

    render() {
        const { email, password} = this.state;
        return (
            <div className="session-forms">
            <h2>Welcome to Pintellect</h2>
            <p>find new subject to explore</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                Email
                <input
                    type="text"
                    value={email}
                    placeholder='Email'
                    onChange={this.handleInput("email")}
                />
                </label>
                <br />
                <label>
                Password
                <input
                    type="password"
                    value={password}
                    placeholder='Password'
                    onChange={this.handleInput("password")}
                />
                </label>
                <br />
                {this.props.submitButton === 'signup' ? this.renderAge() : null }
                {this.props.errors ? this.errors : null}
                <br />
                <button>{this.props.submitButton}</button>
            </form>
            {this.props.navLink}
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
