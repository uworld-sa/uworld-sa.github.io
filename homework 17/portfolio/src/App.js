import React, { Component } from 'react';
import {Route, Switch, Link} from "react-router-dom";
import './App.scss';
import './reset.scss';
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Resume from "./components/Resume/Resume.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
          </header>
          <div className="App-container">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/resume" component={Resume}/>
                  <Route path="*" component={Notfound}/>
              </Switch>
          </div>
      </div>
    );
  }
}

export default App;
