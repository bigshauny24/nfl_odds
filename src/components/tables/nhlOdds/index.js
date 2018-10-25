import React, { Component } from 'react';
import './index.css';
import NHLOddsItem from './nhlOddsItem'

class NHLOddsTable extends Component {
  constructor(){
    super();
    this.state = {
      teams: {
        'ANA': 'Anaheim',
        'ARI': 'Arizona',
        'ATL': 'Atlanta',
        'BOS': 'Boston',
        'BUF': 'Buffalo',
        'CAR': 'Carolina',
        'CGY': 'Calgary',
        'CHI': 'Chicago',
        'CBJ': 'Columbus',
        'COL': 'Colorado',
        'DAL': 'Dallas',
        'DCG': 'Detroit',
        'DET': 'Detroit',
        'EDM': 'Edmonton',
        'FLA': 'Florida',
        'LAK': 'Los Angeles',
        'MIN': 'Minnesota',
        'MTL': 'Nashville',
        'NJD': 'New Jersey',
        'NYI': 'New York',
        'NYR': 'New York',
        'OTT': 'Ottawa',
        'PHI': 'Philadelphia',
        'PHX': 'Phoenix',
        'PIT': 'Pittsburgh',
        'SEN': 'Ottawa',
        'SJS': 'San Jose',
        'STL': 'St. Louis',
        'TBL': 'Tampa Bay',
        'TOR': 'Toronto Maple',
        'VAN': 'Vancouver',
        'VGK': 'Vegas Golden',
        'WPG': 'Winnipeg',
        'WSH': 'Washington'
      }
    }
  }

  getTeamName = abbr =>{
    let name = this.state.teams[abbr];
    return name;
  }

  render() {
    return (
      <div className="NHLOddsTable">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">
                    <img className="logo" alt="NFL Logo" src={require('../../../static/images/nfl.png')} />
                  </th>
                  <th scope="col">Team</th>
                  <th scope="col">Spread</th>
                  <th scope="col">MoneyLine</th>
                  <th scope="col">Over /Under</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.data && this.props.data.map(
                    (game, key) => <NHLOddsItem key={key} game={game} getTeamName={this.getTeamName} scores={this.props.scores} />
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default NHLOddsTable;
