import React, { Component } from 'react';
import './index.css';
import MLBOddsItem from './mlbOddsItem'

class MLBOddsTable extends Component {
  constructor(){
    super();
    this.state = {
      teams: {
        'ARI': 'Arizona',
        'ATL': 'Atlanta',
        'BAL': 'Baltimore',
        'BOS': 'Boston',
        'CHC': 'Chicago',
        'CHW': 'Chicago',
        'CIN': 'Cincinnati',
        'CLE': 'Cleveland',
        'COL': 'Colorado',
        'DET': 'Detroit',
        'HOU': 'Houston',
        'KC':  'Kansas',
        'LAA': 'Los Angeles',
        'LAD': 'Los Angeles',
        'MIA': 'Miami',
        'MIL': 'Milwaukee',
        'MIN': 'Minnesota',
        'NYY': 'New York',
        'NYM': 'New York',
        'NYY': 'New York',
        'OAK': 'Oakland',
        'PHI': 'Philadelphia',
        'PIT': 'Pittsburgh',
        'SD': 'San Diego',
        'SEA': 'Seattle',
        'SF': 'San Francisco',
        'STL': 'St. Louis',
        'TB': 'Tampa Bay',
        'TEX': 'Texas',
        'TOR': 'Toronto',
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
      <div className="MLBOddsTable">
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
                    (game, key) => <MLBOddsItem key={key} game={game} getTeamName={this.getTeamName} scores={this.props.scores} />
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

export default MLBOddsTable;
