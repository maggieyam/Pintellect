import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import SearchBoard from '../../search/search'
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
        // if (!pins) return null;
  
        return (
            <div className="pins-seeds-container">
                {pins ? mapPinsToCols(pins, () => this.addBoard, this.props.openModal) : null}           
                {/* {pins.map((colPins, i) => 
                  <div key={i} className={`column column${i} pin-columns`}>
                  {colPins.map((pin) => 
                    <>
                      <Link to={`/pin/${pin.id}`}>
                        <img 
                        src={pin.link} 
                        alt="pins" 
                        key={pin.id} 
                        id={`pin${pin.id}`} 
                        />
                      </Link>
                      <SearchBoard 
                          boards={pin.boards}
                          openModal={this.props.openModal}
                          addBoard={this.addBoard}
                          pin={pin}
                        />
                    </>
                )}
                </div>
              )} */}
            </div>
        );
    }
}

export default PinIndex;