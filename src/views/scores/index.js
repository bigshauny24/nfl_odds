import React, { Component } from 'react';
import './index.css';
import ScoresForm from '../../components/forms/scores';
import ScoresTable from '../../components/tables/scores';
import API_KEY from '../../config.js';

class Scores extends Component {

  constructor() {
    super();
    this.state = {
      year: 2018,
      week: 1,
      data:[]
    }
  }

  getInput = async(e) => {
    e.preventDefault();

    const year = e.target.elements.year.value;
    const week = e.target.elements.week.value;

    this.setState({
      year: year,
      week: week,
    })

    this.getData(year,week);
  }


  getData = (year, week) => {
    let url =
    `https://api.fantasydata.net/v3/nfl/scores/JSON/ScoresByWeek/${year}/${week}
    `
    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        data => this.setState({data: data})
      )
      .then(
        console.log(this.state.data)
      );
  }

  componentWillMount() {
    this.getData(2018, 1);
  }

  render() {
    return (
      <div className="Scores">
        <ScoresForm getInput = {this.getInput} />
        <h1>Year: {this.state.year} </h1>
        <h3>Week: {this.state.week}</h3>
        <ScoresTable data={this.state.data} />
      </div>
    );
  }
}

export default Scores;
