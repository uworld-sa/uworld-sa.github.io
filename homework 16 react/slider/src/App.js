import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';

class App extends Component {

  render() {
    let slider1Data = [{
        src: '/img/img1.jpg',
        title: 'slide1'
      },
      {
        src: '/img/img2.jpg',
        title: 'slide2'
      },
      {
        src: '/img/img3.jpg',
        title: 'slide3'
      }
    ];
    let slider2Data = [{
        src: '/img/img4.jpg',
        title: 'slide4'
      },
      {
        src: '/img/img5.jpg',
        title: 'slide5'
      },
      {
        src: '/img/img6.jpg',
        title: 'slide6'
      }
    ]
    return (
      <div className="App">
        <Slider 
          data = {slider1Data}
          delay = {1500}
          id = "slide1"
        />
        <Slider 
          data = {slider2Data}
          delay = {1000}
          id = "slide2" 
        />
      </div>
    );
  }
}

export default App;
