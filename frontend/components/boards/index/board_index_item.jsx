import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { fetchPin, fetchPins} from '../../../utils/pins_api_util';



// const BoardIndexItem = ({board, openModal, requestPin}) => {
  // const getPins = () => {
  //   return board.pinIds.slice(0,3).map((id, idx) => {
  //     const pin = requestPin(id);
  //     console.log(pin.title);
  //     
  //   return(
  //     <img src={pin.link} alt="pins" className={`board-index-img${idx}`}/>
  //   )
  //   })
  // }
  // const modal = {type: 'update', item: board}
  //   // const create = {type: 'create', item: board}
  // return (
  //   <div id="index-item">
  //     <div id="images-main-container">
  //     {board.pinIds.length > 1 ? getPins() : null}
  //     <FontAwesomeIcon
  //                   icon={faPen}  
  //                   id="edit-board"
  //                   className="icon"
  //                   size="2x"
  //                   onClick={() => openModal(modal)}
  //               />
  //     </div>
  //     <div className="labels-board-index">
  //       <h3 id="boards">{board.title}</h3>
          
  //     </div>
      
  //   </div>
  // );   
  
// } 

// const modal = `update ${board.id}`
class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state{
    //   pin:
    // }
    this.getPins = this.getPins.bind(this);

  }

//  componentDidMount() {
   
//   this.props.board ? this.getPins() : null;
  
  // }

  getPins() {
    
    const ids = this.props.board.pinIds.slice(0, 3);
    const newPins = this.props.pins;
    return ids.map((id) => {
      
      console.log(newPins[id].title)
      

       return(
         <div>Hello{this.props.pin.title}</div>
       )
      const pin = this.props.requestPin(id).then(() => {
        return(
          <div>Hello
          <img src={pin.link} alt="pins" className={`board-index-img${idx}`}/>{pin.title}
          </div>
        )
      }
    );
    
    })
  }

  render (){  // const create = {type: 'create', item: board}
    const modal = {type: 'update', item: this.props.board}
    const { board, openModal } = this.props;
    return (
      <div id="index-item">
        <div id="images-main-container">
        {/* {board.pinIds.length > 1 ? this.getPins() : null} */}
        <FontAwesomeIcon
                      icon={faPen}  
                      id="edit-board"
                      className="icon"
                      size="2x"
                      onClick={() => openModal(modal)}
                  />
        </div>
        <div className="labels-board-index">
          <h3 id="boards">{board.title}</h3>
            
        </div>
        
      </div>
    );   
  }
}

export default BoardIndexItem;