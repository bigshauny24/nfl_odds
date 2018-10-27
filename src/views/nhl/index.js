import React, { Component } from 'react';
import './index.css';
import NHLForm from '../../components/forms/nhlForm';
import NHLOddsTable from '../../components/tables/nhlOdds';
import {NHL_API_KEY} from '../../config.js';

class NHL extends Component {

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
  //

    const date = e.target.elements.date.value;
  //   // const formattedDate = Moment(date).format("LL");
  //   // const week = e.target.elements.week.value;
  //
  //
    this.setState({
      date: date,
    })
    this.getData(date);
  }

  getData = (date) => {
    let url =
    `https://api.fantasydata.net/v3/nhl/odds/JSON/GameOddsByDate/${date}`

    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': NHL_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        data => {
          this.setState({data: data});
          console.log(data);
        }
      )
      this.getScores()
  }

  getScores = (date) => {
    let url =
    `https://api.fantasydata.net/v3/nhl/odds/JSON/GameOddsByDate/${date}
    `
    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': NHL_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        scores => {
          this.setState({scores});
        }
      )

  }


  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  }

  componentWillMount() {
    this.getData(this.state.date);
    this.getDate();
    // this.getScores(2018, 1);
  }

  render() {
    return (
      <div className="NHL">
        <NHLForm getInput = {this.getInput} />
        <h1>Date: {this.state.date} </h1>
        { this.state.scores.length > 0 && this.state.scores[0].AwayTeam }
        <NHLOddsTable data={this.state.data} scores={this.state.data} />
      </div>
    );
  }
}

export default NHL;
