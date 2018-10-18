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
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.AwayTeamName.toLowerCase() + '.png')} />
          </th>
        <td>{this.props.getTeamName(this.props.game.AwayTeamName)}</td>
          <th scope="col">
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.HomeTeamName.toLowerCase() + '.png')} />
          </th>
        <td>{this.props.getTeamName(this.props.game.HomeTeamName)}</td>
        <td>{this.props.game.PregameOdds &&
            this.props.game.PregameOdds[1].OverUnder}
        </td>
      </tr>
    );
  }
}

export default ScoresItem;
