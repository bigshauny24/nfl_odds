import React, { Component } from 'react';
import './index.css';

class OddsTable extends Component {
  constructor(){
    super();
    this.state = {
      teams: {
        'ARI': 'Arizona',
        'ATL': 'Atlanta',
        'BAL': 'Baltimore',
        'BUF': 'Buffalo',
        'CAR': 'Carolina',
        'CHI': 'Chicago',
        'CIN': 'Cincinnati',
        'CLE': 'Cleveland',
        'DAL': 'Dallas',
        'DEN': 'Denver',
        'DET': 'Detroit',
        'GB': 'Green Bay',
        'HOU': 'Houston',
        'IND': 'Indianapolis',
        'JAX': 'Jacksonville',
        'KC': 'Kansas City',
        'LAC': 'Los Angelos (Chargers)',
        'LAR': 'Los Angelos (Rams)',
        'MIA': 'Miami',
        'MIN': 'Minnesotta',
        'NE': 'New England',
        'NO': 'New Orleans',
        'NYG': 'New York (Giants)',
        'NYJ': 'New York (Jets)',
        'OAK': 'Oakland',
        'PHI': 'Philadelphia',
        'PIT': 'Pittsburgh',
        'SEA': 'Seattle',
        'SF': 'San Francisco',
        'TB': 'Tampa Bay',
        'TEN': 'Tennessee',
        'WAS': 'Washington'
      }
    }
  }

  getTeamName = abbr =>{
    let name = this.state.teams[abbr];
    console.log(abbr, name);
    return name;
  }

  render() {
    return (
      <div className="OddsTable">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">
                    <img className="logo" alt="NFL Logo" src={require('../../../static/images/nfl.png')} />
                  </th>
                  <th scope="col">Away Team</th>
                  <th scope="col">
                    <img className="logo" alt="NFL Logo" src={require('../../../static/images/nfl.png')} />
                  </th>
                  <th scope="col">Home Team</th>
                  <th scope="col">Over /Under</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">
                      <img className="logo" alt="NFL Logo"  src={require('../../../static/images/pit.png')} />
                    </th>
                  <td>{this.getTeamName('PIT')}</td>
                    <th scope="col">
                      <img className="logo" alt="NFL Logo" src={require('../../../static/images/ne.png')} />
                    </th>
                  <td>{this.getTeamName('NE')}</td>
                  <td>58.9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default OddsTable;
