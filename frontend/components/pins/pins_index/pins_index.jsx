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
        if(boards) {boards = Object.values(boards)};
        pins = Object.values(pins);
        pins = reorganizePins(pins, true);

        return (
            <div className="pins-seeds-container">
                {mapPinsToCols(pins, openModal, boards)}           
            </div>
        );
    }
}

export default PinIndex;