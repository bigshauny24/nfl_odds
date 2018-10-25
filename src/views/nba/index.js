import React, { Component } from 'react';
import './index.css';
// import OddsForm from '../../components/forms/odds';
import NBAOddsTable from '../../components/tables/nbaOdds';
import {NBA_API_KEY} from '../../config.js';

class NBA extends Component {

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
    `https://api.fantasydata.net/v3/nba/odds/JSON/GameOddsByDate/2018-JUL-29`

    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': NBA_API_KEY}})
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
    `https://api.fantasydata.net/v3/nba/odds/JSON/GameOddsByDate/2018-JUL-29
    `
    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': NBA_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        scores => {
          console.log(scores);
          this.setState({scores});
        }
      )


  }

  componentWillMount() {
    this.getData(this.state.date);

    // this.getScores(2018, 1);
  }

  render() {
    return (
      <div className="NBA">

        <h1>Date: {this.state.date} </h1>
        { this.state.scores.length > 0 && this.state.scores[0].AwayTeam }
        <NBAOddsTable data={this.state.data} scores={this.state.data} />
      </div>
    );
  }
}

export default NBA;
