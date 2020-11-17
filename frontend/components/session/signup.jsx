import React from 'react';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            age: '',
        }
    }

    handleInput(field){
        return (e) => {
            this.setState({ [field]: e.currentTarget.value})
        }
    }

    render(){
        return (

            <div>

            </div>
        )
    }
}

export default Signup;