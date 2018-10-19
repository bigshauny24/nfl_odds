import React, { Component } from 'react';
import './index.css';

class ScoresItem extends Component {
  componentWillMount() {
    console.log(this.props.game);
  }

  render() {
    return (
      <tr>
        <th scope="col">
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.AwayTeam.toLowerCase() + '.png')} />
          </th>
        <td>{this.props.getTeamName(this.props.game.AwayTeam)}</td>
        <td>{this.props.game.AwayScore &&
            this.props.game.AwayScore}
        </td>
          <th scope="col">
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.HomeTeam.toLowerCase() + '.png')} />
          </th>
        <td>{this.props.getTeamName(this.props.game.HomeTeam)}</td>
        <td>{this.props.game.HomeScore &&
            this.props.game.HomeScore}
        </td>
      </tr>
    );
  }
}

export default ScoresItem;
