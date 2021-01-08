import { Link, Redirect } from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {reorganizePins, mapPinsToCols} from '../../utils/pins_positioning_utils';
class SearchPin extends React.Component {
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       keywords: '',
  //       cols: 0,
  //       pins: null
  //     }
  //     this.getCols = this.getCols.bind(this);
  //   }

  // componentDidMount() {
  //   this.props.requestPins();
  //   window.addEventListener('resize', this.getCols);
  // }
  
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.getCols);
  // }

  // getCols() {
  //   const cols = Math.floor(window.innerWidth / 243.5);
  //   this.setState({cols: cols})
  // }

  filter() {   
    // let pins = Object.values(this.props.pins)
    // let count = 0;
    let pins = [];
    let allPins =  Object.values(this.props.pins);
    for (let pin of allPins) {
      const description = pin.description.toLowerCase().split(' ');
      const title = pin.title.toLowerCase().split(' ');
      const keywords = this.props.keywords.toLowerCase().split(' ');
      for (let keyword of keywords) {
        // let option = document.querySelector(`.pin-${pin.id}`);
        if (description.includes(keyword.toLowerCase()) || title.includes(keyword.toLowerCase())) {
            // let oldCol = option.parentElement;
            // oldCol.removeChild(option);
            // let column = document.getElementById(`${count % this.state.cols}-columns`);
            
            // column.prepend(option);
            // option.style.display = 'flex';   
            // count += 1;   
            pins.push(pin); 
            
        // } else {
        //   // option.style.display = 'none';
        }
      }     
    }  
    
    return pins;
    // pins = reorganizePins(pins, false);
    // mapPinsToCols(pins, this.props.openModal, this.props.boards)
  }

  // update() {
  //   return e => {
  //       e.preventDefault();
  //       this.setState({keywords: e.currentTarget.value});
        
  //   }
  // }

  onKeyEnter() {
    return e => 
      e.key === 'Enter' ? this.filter() : null;
  }


    render() {  

        let { openModal, boards, pins} = this.props;
        if (!pins) return null;
        if(boards) {boards = Object.values(boards)};
        let allPins = this.filter();

        // if (!this.state.pins) allPins = Object.values(this.props.pins);
        
        const {cols} = this.props;
        pins = reorganizePins(allPins, cols, false);

        return (
            <div>
                <div className="pins-seeds-container">
                    {mapPinsToCols(pins, openModal, boards)}           
                </div>
            </div>
        );
    }
}

export default SearchPin;