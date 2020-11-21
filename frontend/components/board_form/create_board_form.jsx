import React from 'react';

class CreateBoardForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            private: false
            // startDate: "",
            // endDate: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.createBoard(this.state);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }
    
    render(){
        const {title, startDate, endDate} = this.state;
        return(
            <div className="board-form">
                <h2 className="form-header">Create board</h2>
                <form onSubmit={this.handleSubmit} className="input-create">
                    <span className="form-label">Name <br/></span>
                        <input type="text"
                        id="input-title" 
                        value={title}
                        placeholder={`Like "Place to Go" or "Recipe to Make"`}
                        onChange={this.update("title")}/>
                    
                    <span className="form-label">Dates</span>
                        <input type="date" 
                        id="input-title"
                        placeholder={`Like "Place to Go" or "Recipe to Make"`}
                        onChange={this.update("start_date")}/>
                    
                    <p className="notes">Add a date to keep your recommendations
                    relevant and get reminders about <br/>planning</p>
                    {/* <label for="switch" class="toggle">
                        <input type="checkbox" id="switch" class="checkbox" />
                    </label> */}
                    <h3 id="secret">So only you and collaborators can see it. </h3>
                    <button>Create</button>
                </form >
            </div>
        )
    }
}

export default CreateBoardForm;