import React, { Component } from 'react';
import './index.css';
import OddsForm from '../../components/forms/odds';
import OddsTable from '../../components/tables/odds';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      year: 2018,
      week: 1
    }
  }

  getInput = async(e) => {
    e.preventDefault();

    const year = e.target.elements.year.value;
    const week = e.target.elements.week.value;

    this.setState({
      year: year,
      week: week
    })
  }

  render() {
    return (
      <div className="Home">
        <OddsForm getInput = {this.getInput} />
        <h1>Year: {this.state.year} </h1>
        <h3>Week: {this.state.week}</h3>
        <OddsTable />
      </div>
    );
  }
}

export default Home;
