import React, { Component } from 'react';
import './Resume.scss'


class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <div className="resumeWrap">
                    <div className="infoBlock">
                        <div className="infoBlockTitle">Technologies</div>
                        <div className="infoBlockContent">
                            <ul>
                                <li>Sass / LESS</li>
                                <li>HTML5 / CSS3</li>
                                <li>JavaScript / jQuery</li>
                                <li>WordPress / PHP</li>
                                 <li>Drupal / PHP</li>
                                 <li>Photoshop / Sketch</li>
                                 <li>Version Control ( GIT )</li>
                                 <li>Bootstrap</li>
                                 <li>Responsive Layout and Design</li>
                                 <li>Cross-Browser Compatibility</li>
                                 <li>AJAX</li>
                                 <li>ArangoDB / MongoDB</li>
                                 <li>Node.js (limited)</li>
                                 <li>React.js (limited)</li>
                                 <li>Dialogflow (limited)</li>
                            </ul>
                        </div>
                        <div className="infoBlockTitle">Work Experience</div>
                        <div className="infoBlockContent">
                            <b className="subTitle">FRONT-END DEVELOPER 2013 – PRESENT</b><br/>
                            <div className="text">
                                Developed websites for medical institutions. Designed a service for communicating a messager Mattermost and 1C
                                for receiving reports, editing and creating new entities. Participated in the implementation of online stores.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume