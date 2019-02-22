import React, {Component} from 'react';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.item.src,
            title: props.item.title
        }
    }
    render() {
        return ( 
            <div className = "slide">
                <img alt="" src={this.state.src} />
                <span className = "title" > {this.state.title} </span>
            </div> 
        );
    }
}

export default Slide;
