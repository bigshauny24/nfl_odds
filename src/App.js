import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home';
import Scores from './views/scores';
import Header from './components/header';
//import LoginPage from './views/loginPage/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div className="container">
            <Switch>
              <Route exact path='/' render={() => <Home />} />
              <Route exact path='/index' render={() => <Home />} />
              <Route exact path='/scores' render={() => <Scores />} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
