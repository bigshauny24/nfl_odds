import React, { Component } from 'react';
import './index.css';
import OddsForm from '../../components/forms/odds';
import OddsTable from '../../components/tables/odds';
import NFL_API_KEY from '../../config.js';

class NFL extends Component {

  constructor() {
    super();
    this.state = {
      year: 2018,
      week: 1,
      data:[],
      scores: []
    }
  }

  getInput = async(e) => {
    e.preventDefault();

    const year = '2018';
    const week = e.target.elements.week.value;


    this.setState({
      year: year,
      week: week,
    })

    this.getData(year,week);

  }


  getData = (year, week) => {
    let url =
    `https://api.fantasydata.net/v3/nfl/odds/JSON/GameOddsByWeek/${year}/${week}`

    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': NFL_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        data => this.setState({data: data})
      )
      this.getScores(year,week)
  }

  getScores = (year, week) => {
    let url =
    `https://api.fantasydata.net/v3/nfl/scores/JSON/ScoresByWeek/${year}/${week}
    `

    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': NFL_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        scores => this.setState({scores: scores})
      )
      .then(
        console.log(this.state.scores)
      );
  }

  componentWillMount() {
    this.getData(2018, 1);
    this.getScores(2018, 1);
  }

  render() {
    return (
      <div className="NFL">
        <OddsForm getInput = {this.getInput} />
        <h1>Year: {this.state.year} </h1>
        <h3>Week: {this.state.week}</h3>
        <OddsTable data={this.state.data} scores={this.state.data} />
      </div>
    );
  }
}

export default NFL;
