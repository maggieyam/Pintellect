import React from 'react';
import BoardShowContainer from '../show/board_show_container';

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
        // this.props.createBoard(this.state);
        const board = Object.assign({}, this.state);
        this.props.createBoard(board).then(() => this.props.closeModal());
        // <BoardShowContainer />
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }
    
    render(){
        const {title, startDate, endDate} = this.state;
        return (
          <div className="board-form">
            <form onSubmit={this.handleSubmit} className="input-create">
              <h1 className="form-header">Create board</h1>
              {/* <div id="input-field"> */}
              <span id="form-label">
                Name <br />
              </span>
              <input
                type="text"
                id="input-form"
                value={title}
                placeholder={`  Like "Place to Go" or "Recipe to Make"`}
                onChange={this.update('title')}
              />

              <br/><span id="form-label">Dates</span>
              <input
                type="date"
                id="input-form"
                onChange={this.update('start_date')}
              />
              {/* </div> */}
              <p className="notes">
                Add a date to keep your recommendations relevant and get
                reminders about <br />
                planning
              </p>
              <div id="secret-toggle">Keep this Board Scret</div>
              {/* <label for="switch" class="toggle">
                        <input type="checkbox" id="switch" class="checkbox" />
                    </label> */}
              <p id="secret-line">So only you and collaborators can see it. </p>
              <button id="create-btn">Create</button>
            </form>
          </div>
        );
    }
}

export default CreateBoardForm;