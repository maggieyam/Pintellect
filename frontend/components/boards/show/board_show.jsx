import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { reorganizePins, mapPinsToCols } from '../../../utils/pins_positioning_utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenCircle} from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';


class BoardShow extends React.Component {

    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId);
    }

    mapSingleRowPins() {
        let pins = this.props.board.allPins;
        return( 
            pins.map((pin, i) => 
            <div className={`column column${i} pin-columns`}>
                <Link to={`/pin/${pin.id}`}>
                    <img 
                    src={pin.link} 
                    alt="pins" 
                    key={pin.id} 
                    id={`pin${pin.id}`} 
                    />
                </Link>
            </div>
        ))
    }

    renderPins(){
        let pins = this.props.board.allPins;
        if (pins.length > 7) {
            pins = reorganizePins(pins, false);
            return mapPinsToCols(pins)
        } else {
            
            return this.mapSingleRowPins(pins)             
        }      
    }

    render(){
        const {board} = this.props;
        if (!board) return null;

        return(
            <div id="board-show"> 
                <div id="board-show-top">
                    <h1 id="board-title">{board.title}
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="edit-pen"
                        size="sm"
                    /></h1>
                    <span id="board-description">{board.description}</span>
                </div>
                <div id="board-show-pins" className="pins-seeds-container">
                    {this.renderPins()}
                </div>
            </div>
        )
    }
}
export default BoardShow;
