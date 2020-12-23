import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { reorganizePins, mapPinsToCols } from '../../../utils/pins_positioning_utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class BoardShow extends React.Component {

    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId);
    }

    render(){
        const {board, openModal} = this.props;
        if (!board) return null;
        const modal = {type: 'update', item: this.props.board}
        const pins = reorganizePins(board.allPins, false);

        return(
            <div id="board-show"> 
                <div id="board-show-top">
                    <h1 id="board-title">{board.title}
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="edit-pen"
                        size="sm"
                        onClick={() => openModal(modal)}
                    />
                    </h1>
                    <span id="board-description">{board.description}</span>
                </div>
                {mapPinsToCols(pins, openModal, board.currentBoards)}
            </div>
        )
    }
}
export default BoardShow;
