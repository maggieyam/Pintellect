import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {reorganizePins, mapPinsToCols} from '../../../utils/pins_positioning_utils';
class PinIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          boardId: 0,
        }
    }

    componentDidMount() {
        this.props.requestPins();
    }

    render() {  

        let { openModal, boards, pins} = this.props;
        if (!pins) return null;

        boards = Object.values(this.props.boards);
        pins = Object.values(this.props.pins);
        pins = reorganizePins(pins, true);
        
        return (
            <div className="pins-seeds-container">
                {boards ? mapPinsToCols(pins, openModal, boards) : null}           
            </div>
        );
    }
}

export default PinIndex;