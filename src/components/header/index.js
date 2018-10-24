import React, { Component } from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
// import LoginPage from '../../views/loginPage/index.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">NFL Odds</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/scores">Scores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nfl">NFL</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mlb">MLB</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nba">NBA</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nhl">NHL</NavLink>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;
