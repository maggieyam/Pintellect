import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount() {
        this.props.requestPins();
    }

    shuffle_pins(){
        const { pins } = this.props;
        let used = [];
        let shuffled = [];
        const len = pins.length;
        for (let i = 1; i <= 7; i++) {
            let inner = [];
            for (let j = 0; j < Math.floor(len / 7); j++){
                let rand = 0;
                while(used.includes(rand)){
                    rand = Math.floor(Math.random() * len);
                }
                inner.push(pins[rand]);
                used.push(rand)               
            }
            shuffled.push(inner);
        }
        return shuffled;
       
    }

    // toShowPage(pinId) {
    //     this.props.fetchPin(pinId).then(this.props.history(`/pin/${pinId}`));
    // }

    render() {       
        const pins = this.shuffle_pins();
        return(
            <div className="pins-seeds-container">               
              {pins.map((colPins, i) => 
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
              )}
           </div> 
        )
    }
}

export default PinIndex;