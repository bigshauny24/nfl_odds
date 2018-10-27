import React, { Component } from 'react';
import './index.css';
import MLBForm from '../../components/forms/mlbForm';
import MLBOddsTable from '../../components/tables/mlbOdds';
import {MLB_API_KEY} from '../../config.js';

class MLB extends Component {

  constructor() {
    super();
    this.state = {
      date: '2018-OCT-23',
      data: [],
      scores: []
    }
  }

  getInput = async(e) => {
    e.preventDefault();


    const date = e.target.elements.date.value;
    // const month = e.target.elements.month.value;
    // const day = e.target.elements.day.value;
    // const formattedDate = Moment(date).format("LL");
    // const week = e.target.elements.week.value;

    // let date = year +  '-' + month + '-' + day

    this.setState({
      date: date,
    })
    this.getData(date);
  }



  getData = (date) => {
    let url =
    `https://api.fantasydata.net/v3/mlb/odds/JSON/GameOddsByDate/${date}`

    fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': MLB_API_KEY}})
      .then(
        res => res.json()
      )
      .then(
        data => {
          console.log(data);
          this.setState({data: data});
        }
      )
        this.getScores()
        // this.getDate()

  }

  getScores = (date) => {
    let url =
    `https://api.fantasydata.net/v3/mlb/odds/JSON/GameOddsByDate/${date}
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
      <div className="MLB">
        <MLBForm getInput = {this.getInput} />
        <h1>Date: {this.state.date} </h1>
        { this.state.scores.length > 0 && this.state.scores[0].AwayTeam }
        <MLBOddsTable data={this.state.data} scores={this.state.data} />
      </div>
    );
  }
}

export default MLB;
