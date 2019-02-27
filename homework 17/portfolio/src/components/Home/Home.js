import React, { Component } from 'react';
import './Home.scss'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="imgWrap">
                    <img className="front" alt="" src="/images/Web-developer.jpeg" />
                </div>
                <div className="titleWrap">
                    <div className="title">
                        Hi, I'am Sergey.<br/>
                        I design and code beautifully simple things, and I love what I do.
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        )
    }
}

export default Home