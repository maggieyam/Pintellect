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
        const pins = reorganizePins(this.props.pins, true);
        debugger
        return (
            <div className="pins-seeds-container">
                {pins[0][0] ? mapPinsToCols(pins, this.props.openModal, pins[0][0].boards) : null}           
            </div>
        );
    }
}

export default PinIndex;