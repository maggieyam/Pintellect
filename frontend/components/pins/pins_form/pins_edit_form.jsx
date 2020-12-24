import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTrashAlt,
  faChevronDown,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { toggle } from "../../../utils/drop_down_util"

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      link: '',
      boardId: 0,
      selectBoards: [],

    };
    this.boards = this.state.boards
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dropDown = this.dropDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;   
    this.props.updatePin(this.props.pinId)
        .then(this.props.history.push(`/`));   
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  }


  // search(boards) {
  //   return e => {     
  //     let res = boards.filter(board => 
  //           !board.title.includes(e.currentTarget.value));
             
  //       this.select(res);
    
  //   }
  // }


//  addBoard(boardId) {
   
//     return () => {
//       this.setState({boardId: boardId});    
//       let option = document.querySelector(`#board${boardId}`).innerText;
//       document.querySelector('#select').innerHTML = option;
//       document.querySelector('#dropDown-content').style.display = 'none';

//     };
    
//  }

//  getPin(boards) {
//     // const pin = {};
//     for (let i = 0; i < this.props.boards.length; i++) {
//       if (boards[i].pinIds.includes(this.props.pinId)) {
//         pin = boards[i].allPins[pinId];
        
//         return pin;
//       }

//     }
//   }


//  select(boards) {
// // deb/ugger
//     return boards.map((board) => {
//         return (
//           <div className="select-board"
//           key={board.id}
//           id={`board${board.id}`}
//           onClick={this.addBoard(board.id)}>

//             <img src={board.allUrls[0] ? board.allPins[0].link : null} className="mini-img"/>
//             {board.title}
//           </div>
//         );
//       })
//  }


  render() {
    // const { title, description, link } = this.state;
    // const { user, boards, pinId } = this.props;
    // const { first_name, last_name } = user;
    // // if (!boards || boards.length === 0) return null;
    // const pin = this.getPin(boards);
    // const modal = {type: 'create'};
    return (
      <div id="body-container">
        <div id="body-section">
          <div>
            Hello
          </div>
        </div>
      </div>
    );
  }
}

export default EditPinForm;