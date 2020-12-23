import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import SearchBoard from '../../search/searchBoard'
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
  
        return (
            <div className="pins-seeds-container">
                {pins ? mapPinsToCols(pins, this.props.openModal, pins[0].boards) : null}           
            </div>
        );
    }
}

export default PinIndex;