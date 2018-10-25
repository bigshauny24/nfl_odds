import React, { Component } from 'react';
import './index.css';
// import OddsForm from '../../components/forms/odds';
import MLBOddsTable from '../../components/tables/mlbOdds';
import {MLB_API_KEY} from '../../config.js';

class MLB extends Component {

  constructor() {
    super();
    this.state = {
      date: '2018-06-29',
      data: [],
      scores: []
    }
  }

  getInput = async(e) => {
    e.preventDefault();


    const date = e.target.elements.date.value;
    // const formattedDate = Moment(date).format("LL");
    // const week = e.target.elements.week.value;


    this.setState({
      date: date,
    })
    this.getData(date);
  }

  getData = () => {
    let url =
    `https://api.fantasydata.net/v3/mlb/odds/JSON/GameOddsByDate/2018-JUL-29`

    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': MLB_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        data => {
          this.setState({data: data});
        }
      )
        this.getScores()
  }

  getScores = () => {
    let url =
    `https://api.fantasydata.net/v3/mlb/odds/JSON/GameOddsByDate/2018-JUL-29
    `
    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': MLB_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        scores => {
          this.setState({scores});
        }
      )

  }

  componentWillMount() {
    this.getData('2018-06-29');

    // this.getScores(2018, 1);
  }

  render() {
    return (
      <div className="MLB">

        <h1>Date: {this.state.date} </h1>
        { this.state.scores.length > 0 && this.state.scores[0].AwayTeam }
        <MLBOddsTable data={this.state.data} scores={this.state.data} />
      </div>
    );
  }
}

export default MLB;
