import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { reorganizePins, mapPinsToCols } from '../../../utils/pins_positioning_utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenCircle} from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import SearchBoard from '../../search/searchBoard';

class BoardShow extends React.Component {

    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId);
    }

    mapSingleRowPins() {
        const {allPins, currentBoards} = this.props.board;
        let pins = allPins;
        return( 
            // <div className={`column pin-columns`}>
            <div className="board-show-wrapper">
            {pins.map((pin, i) => 
            <div className="pin-wrapper" key={pin.id}>
                <Link to={`/pin/${pin.id}`}>
                    <img 
                    src={pin.link} 
                    alt="pins" 
                    key={pin.id} 
                    id={`pin${pin.id}`} 
                    />
                </Link>
                <SearchBoard 
                    boards={currentBoards}
                    openModal={this.props.openModal}
                    pin={pin}
                />
            </div>
        )}
        </div>
        )}

    renderPins(){
        const {allPins, currentBoards} = this.props.board;
        let pins = allPins;
        if (pins.length > 7) {
            pins = reorganizePins(pins, false);
            return mapPinsToCols(pins, this.props.openModal, currentBoards)
        } else {
            return this.mapSingleRowPins()             
        }      
    }

    render(){
        const {board, openModal} = this.props;
        const modal = {type: 'update', item: this.props.board}
        if (!board) return null;

        return(
            <div id="board-show"> 
                <div id="board-show-top">
                    <h1 id="board-title">{board.title}
                    {/* <Link to={`/${authorId}/${board.id}/edit`}> */}
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="edit-pen"
                        size="sm"
                        onClick={() => openModal(modal)}
                    />
                    {/* </Link> */}
                    </h1>
                    <span id="board-description">{board.description}</span>
                </div>
                {/* <div className="pins-seeds-container"> */}
                    {this.renderPins()}
                {/* </div> */}
            </div>
        )
    }
}
export default BoardShow;
