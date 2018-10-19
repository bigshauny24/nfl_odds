import React, { Component } from 'react';
import './index.css';

class OddsItem extends Component {
  componentWillMount() {
    console.log(this.props.game);
  }

  render() {
    return (
      <tr>
        <th scope="col">
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.AwayTeamName.toLowerCase() + '.png')} /><br />
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.HomeTeamName.toLowerCase() + '.png')} />
          </th>
        <td>{this.props.getTeamName(this.props.game.AwayTeamName)}<br />
            <br />{this.props.getTeamName(this.props.game.HomeTeamName)}</td>
          <th scope="col">
            {this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].AwayPointSpread}<br />
            <br />{this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].HomePointSpread}
          </th>
          <th scope="col">
            {this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].AwayMoneyLine}<br />
            <br />{this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].HomeMoneyLine}
          </th>
          <td scope="col">{this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].OverUnder}
        </td>
      </tr>
    );
  }
}

export default OddsItem;
