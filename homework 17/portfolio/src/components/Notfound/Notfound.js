import React, { Component } from 'react';
import './NotFound.scss'
import notFound from './notFound.svg'


class Notfound extends Component {
    render() {
        return (
            <div className="notFound">
                <div className="section-inner">
                    <span className="svg"><img className="img404" src={notFound} alt="Not Found" /></span>
                    <div className="section-content">
                        <h1 className="title">
                            Error 404 </h1>
                        <div className="catcher"> Ooops, something <br/>went wrong</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notfound