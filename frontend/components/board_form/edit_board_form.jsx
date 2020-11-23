import React from 'react';
import { closeModal } from '../../actions/modal_actions';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.board;
        // this.state = {title: "test1", description: "test2"}
        this.handleSubmit = this.handleSubmit.bind(this);


        // But this.props is read-only; you cannot modify it.

    }

    // componentDidMount(){     
    //     this.props.requestBoard(this.state.id);
    //     // this.requestBoard(53).then(board =>{
    //     //  
    //     //     this.setState(board)
    //     // })    
    // }

    handleSubmit(e) {
        e.preventDefault();       
        this.props.updateBoard(this.state).then(() => this.props.closeModal());
    }

    update(field) {     
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render(){
        const { title, description } = this.state;
        return (
          <div id="board-edit-form">
            <div id="form-header">
              <h2>Edit your board</h2>
            </div>

            <div id="form-body">
              <form onSubmit={this.handleSubmit}>
                <div>Name</div>
                <input
                  type="text"
                  value={title}
                  placeholder={`Like "Place to Go" or "Recipe to Make"`}
                  onChange={this.update('title')}
                  className="input-form"
                />
                <div className="description">Description</div>
                <textarea
                  type="text"
                  value={description}
                  placeholder={`What's your board about?"`}
                  onChange={this.update('description')}
                  className="textarea"
                />

                <div>Dates</div>
                <input
                  type="date"
                  placeholder={`When do you plan to finish this project?`}
                  onChange={this.update('start_date')}
                  className="input-form"
                  id="date"
                />
                <p className="notes">
                  Add a date to keep your recommendations relevant and get
                  reminders about <br />
                  planning
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div id="settings">settings</div>
                <br />
                {/* <label for="switch" class="toggle">
                  <input type="checkbox" id="switch" class="checkbox" />
                </label> */}

                <h3 id="secret-line">Keep this board screte</h3>
                <div>
                  <button className="done-btn">Done</button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default EditBoardForm;
