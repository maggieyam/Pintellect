import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { fetchPin, fetchPins} from '../../../utils/pins_api_util';
import {Link} from 'react-router-dom';

class BoardIndexItem extends React.Component {
  
  addImg(obj, name){
    if(obj) { 
      return (
        <Link to={`/board/${this.props.board.id}`}>
          <img src={ obj["url"] } 
          alt='img' 
          id={name}
          />
        </Link>
     ) 
    }
  }

  render (){  // const create = {type: 'create', item: board}
    const modal = {type: 'updateBoard', item: this.props.board}
    const { board, openModal } = this.props;
    const urls = board.allUrls.slice(0, 3);
    if (!board) return null;
// 
    return (
      <div id="index-item"key={board.id}>
        <div id="images-main-container">
          <div className="board-image-left">
            {this.addImg(urls[0], "left-img")}     
          </div>

          <div id="board-image-right">
            <div>
              {this.addImg(urls[1], 'right-img1')}             
            </div>
            <div >
              {this.addImg(urls[2], 'right-img2')}
            </div>
          </div>
          
          <FontAwesomeIcon
            icon={faPen}  
            id="edit-board"
            className="icon edit-board"
            size="sm"
            onClick={() => openModal(modal)}
          />
        </div>
        <div className="labels-board-index"key={board.id}>
          <h3 id="boards">{board.title}</h3>
            
        </div>
        
      </div>
    );   
  }
}

export default BoardIndexItem;