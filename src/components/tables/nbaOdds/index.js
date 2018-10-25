import React, { Component } from 'react';
import './index.css';
import NBAOddsItem from './nbaOddsItem'

class NBAOddsTable extends Component {
  constructor(){
    super();
    this.state = {
      teams: {
        'ATL': 'Atlanta',
        'BKN': 'Brooklyn',
        'BOS': 'Boston',
        'CHA': 'Charlotte',
        'CHI': 'Chicago',
        'CLE': 'Cleveland',
        'DAL': 'Dallas',
        'DEN': 'Denver',
        'DET': 'Detroit',
        'GSW': 'Golden State',
        'HOU': 'Houston',
        'IND': 'Indiana',
        'LAC': 'Los Angeles',
        'LAL': 'Los Angeles',
        'MEM': 'Memphis',
        'MIA': 'Miami',
        'MIL': 'Milwaukee',
        'MIN': 'Minnesota',
        'NOP': 'New Orleans',
        'NYK': 'New York',
        'OKC': 'Oklahoma City',
        'ORL': 'Orlando',
        'PHI': 'Philadelphia',
        'PHX': 'Phoenix',
        'POR': 'Portland',
        'SAC': 'Sacramento',
        'SAS': 'San Antonio',
        'TOR': 'Toronto',
        'UTA': 'Utah',
        'WAS': 'Washington' 
      }
    }
  }

  getTeamName = abbr =>{
    let name = this.state.teams[abbr];
    return name;
  }

  render() {
    return (
      <div className="NBAOddsTable">
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
                    (game, key) => <NBAOddsItem key={key} game={game} getTeamName={this.getTeamName} scores={this.props.scores} />
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

export default NBAOddsTable;
