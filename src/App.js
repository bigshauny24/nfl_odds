import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home';
import Scores from './views/scores';
import Header from './components/header';
import NFL from './views/nfl';
import MLB from './views/mlb';
import NBA from './views/nba';
import NHL from './views/nhl';
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
              <Route exact path='/nfl' render={() => <NFL />} />
              <Route exact path='/mlb' render={() => <MLB />} />
              <Route exact path='/nba' render={() => <NBA />} />
              <Route exact path='/nhl' render={() => <NHL />} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
