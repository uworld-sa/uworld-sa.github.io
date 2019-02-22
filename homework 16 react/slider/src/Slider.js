import React, {Component} from 'react';
import Slide from './Slide';
import './Slider.css';

class Slider extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slides : props.data,
            currentIndex: 0,
            translatePX: 0,
            delay: props.delay,
            class: props.id
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.nextSlide()
        }, this.state.delay);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    slideWidth = () => {
        return document.querySelector('.' + this.state.class + ' .slide').clientWidth;
    }
    nextSlide = () => {
        if (this.state.currentIndex === this.state.slides.length - 1) {
            this.setState({
                currentIndex: 0,
                translatePX: -(this.state.currentIndex * this.slideWidth())
            });
        } else {
            this.setState({
                currentIndex: this.state.currentIndex + 1,
                translatePX: -(this.state.currentIndex * this.slideWidth())
            });
        }
    }
    render() {
        return ( 
            
            <div className = {"slider " + this.state.class} >
                <div className="sliderWrapper" style={{
                        transform: `translateX(${this.state.translatePX}px)`,
                        transition: `transform linear ${this.state.delay/5}ms`
                    }}>
                    {
                        this.state.slides.map((slide, i) => {
                            return <Slide key = {
                                (this.state.class + i)
                            }
                            item = {
                                slide
                            }
                            />
                        })
                    }
                </div>
            </div> 
        );
    }
}

export default Slider;
