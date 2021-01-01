import React from 'react';

class SearchPin extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         keywords: ''
    //     }
    // }
    componentDidMount() {
        this.props.requestPins();
    }

    filter() {   
        let pins = [];
        let allPins = this.props.pins;
        for (let pin of allPins) {
            const description = pin.description.toLowerCase().split(' ');
            const title = pin.title.toLowerCase().split(' ');
            const keywords = this.state.keywords.toLowerCase().split(' ');
        for (let keyword of keywords) {
            if (description.includes(keyword.toLowerCase()) || title.includes(keyword.toLowerCase())) {
            pins.push(pin);
            break
            }
        }     
        }   

    }

    update() {
        // 
        return e => {
            e.preventDefault();
            this.setState({keywords: e.currentTarget.value})
        }
    }

    onKeyEnter() {
        return e => 
        e.key === 'Enter' ? this.history.push('/search/pins') : null;
    }

    render() {
        return(
            
        )
    }
}

export default SearchPin;