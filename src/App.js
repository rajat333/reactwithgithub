import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { history } from "./_helpers/index";

import logo from './logo.svg';

import './App.css';
import PullRequest from './components/PullRequest/PullRequest';
import GetComments from './components/GetComments/GetComments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router history={history}>
                    <div>
                        <Switch>
                            <Route path="/:id" component={ GetComments }/>
                           <Route component={PullRequest }/> 
                        </Switch>

                    </div>

                </Router>
      </div>
    );
  }
}

export default App;
