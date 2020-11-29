import { Link, Redirect } from 'react-router-dom';
import React from 'react';
// import {reorganizePins, mapPinsToCols} from '../../../utils/pins_positioning_utils';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faPen, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

// import PinIndexItem from './pin_index_item';
// import BoardIndexContianer from '../../boards/index/board_index_container';
import {reorganizePins, mapPinsToCols} from '../../../utils/pins_positioning_utils';
class PinIndex extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount() {
        this.props.requestPins();
    }

    render() {       
        const pins = reorganizePins(this.props.pins, true);
        // if (!pins) return null;
        return (
            <div className="pins-seeds-container">
                {mapPinsToCols(pins)}           
                {/* {pins.map((colPins, i) => 
                  <div key={i} className={`column column${i} pin-columns`}>
                  {colPins.map((pin) => 
                    <Link to={`/pin/${pin.id}`}>
                      <img 
                      src={pin.link} 
                      alt="pins" 
                      key={pin.id} 
                      id={`pin${pin.id}`} 
                      />
                    </Link>
                )}
                </div>
              )} */}
            </div>
        );
    }
}

export default PinIndex;