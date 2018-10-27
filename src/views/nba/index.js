import React, { Component } from 'react';
import './index.css';
import NBAForm from '../../components/forms/nbaForm';
import NBAOddsTable from '../../components/tables/nbaOdds';
import {NBA_API_KEY} from '../../config.js';

class NBA extends Component {

  constructor() {
    super();
    this.state = {
      date: '2018-10-26',
      data: [],
      scores: []
      }
    }

  getInput = async(e) => {
    e.preventDefault();


    const date = e.target.elements.date.value;
  //   // const formattedDate = Moment(date).format("LL");
  //   // const week = e.target.elements.week.value;
  //
  //
    this.setState({
      date: date,
    })
    this.getScores(date);
  }

  // getData = (date) => {
  //   let url =
  //   `https://api.fantasydata.net/v3/nba/odds/JSON/GameOddsByDate/2018-10-26`
  //
  //   fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': NBA_API_KEY}})
  //     .then(
  //       res => res.json()
  //     )
  //     .then(
  //       data => {
  //         this.setState({data: data});
  //         console.log(data);
  //       }
  //     )
  //
  //     this.getScores()
  // }

  getScores = (date) => {
    let url =
    `https://api.fantasydata.net/v3/nba/scores/JSON/GamesByDate/${date}
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

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  }

  componentWillMount() {
    this.getScores(this.state.date);
    this.getDate();
    // this.getScores(2018, 1);
  }

  render() {
    return (
      <div className="NBA">
        <NBAForm getInput = {this.getInput} />
        <h1>Date: {this.state.date} </h1>
        { this.state.scores.length > 0 && this.state.scores[0].AwayTeam }
        <NBAOddsTable data={this.state.data} scores={this.state.data} />
      </div>
    );
  }
}

export default NBA;
