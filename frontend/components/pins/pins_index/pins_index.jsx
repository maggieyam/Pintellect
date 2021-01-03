import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {reorganizePins, mapPinsToCols} from '../../../utils/pins_positioning_utils';
class PinIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          keywords: ''
        }
    }

    componentDidMount() {
        this.props.requestPins();
    }
  

  filter() {   
    let pins = Object.values(this.props.pins)
    // let pins = [];
    let count = 0;
    const cols = Math.floor(window.screen.width / 243.5);
    for (let pin of pins) {
      const description = pin.description.toLowerCase().split(' ');
      const title = pin.title.toLowerCase().split(' ');
      const keywords = this.state.keywords.toLowerCase().split(' ');
      for (let keyword of keywords) {
        let option = document.querySelector(`.pin-${pin.id}`);
        if (description.includes(keyword.toLowerCase()) || title.includes(keyword.toLowerCase())) {
            // pins.push(pin);
        
            
            let oldCol = option.parentElement;
            oldCol.removeChild(option);
            let column = document.getElementById(`${count % cols}-columns`);
            
            column.prepend(option);
            option.style.display = 'flex';   
            count += 1;    
        } else {
          option.style.display = 'none';
        }
      }     
    }  

    pins = reorganizePins(pins, false);
    mapPinsToCols(pins, this.props.openModal, this.props.boards)
  }

  update() {
    return e => {
        e.preventDefault();
        this.setState({keywords: e.currentTarget.value});
        
    }
  }

  onKeyEnter() {
    return e => 
      e.key === 'Enter' ? this.filter() : null;
  }


    render() {  

        let { openModal, boards, pins} = this.props;
        if (!pins) return null;
        if(boards) {boards = Object.values(boards)};
        pins = Object.values(pins);
        pins = reorganizePins(pins, false);

        return (
            <div>
                {/* <div>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" size="lg"/>
                    <div onKeyPress={this.onKeyEnter()}>
                    <input type="text" placeholder="Search" id="search" onChange={this.update()}/>
                    </div>
                </div> */}
                <div className="pins-seeds-container">
                    {mapPinsToCols(pins, openModal, boards)}           
                </div>
            </div>
        );
    }
}

export default PinIndex;