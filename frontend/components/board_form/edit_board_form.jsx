import React from 'react';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.board;
        // this.state = {title: "test1", description: "test2"}
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.requestBoard = this.props.requestBoard.bind(this);


        // But this.props is read-only; you cannot modify it.

    }

    componentDidMount(){
        
        this.props.requestBoard(this.props.id);
        // this.requestBoard(53).then(board =>{
        //  
        //     this.setState(board)
        // })    
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("create button clicked")
        this.props.updateBoard(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render(){
        
        const { title, description } = this.state;
        return(
            <div>
                <h2 className="form-header">Edit your board</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="form-label">Name
                        <input type="text"
                            value={title}
                            placeholder={`Like "Place to Go" or "Recipe to Make"`}
                            onChange={this.update("title")} />
                    </label>
                    <label className="form-label">Description
                        <input type="text"
                            value={description}
                            placeholder={`What's your board about?"`}
                            onChange={this.update("description")} />
                    </label>

                    <label className="form-label">Dates
                        <input type="date"
                            placeholder={`When do you plan to finish this project?`}
                            onChange={this.update("start_date")} />
                    </label>
                    <p className="notes">Add a date to keep your recommendations
                    relevant and get reminders about <br />planning</p>
                    <label for="switch" class="toggle">
                        <input type="checkbox" id="switch" class="checkbox" />
                    </label>
                    <h3 id="secret">Keep this board screte</h3>
                    <button>Done</button>
                </form >

            </div>
        )
    }
}

export default EditBoardForm;
