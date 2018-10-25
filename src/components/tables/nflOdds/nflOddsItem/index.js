import React, { Component } from 'react';
import './index.css';

class NFLOddsItem extends Component {
  componentWillMount() {
    // console.log(this.props.game);
    // console.log(this.props.scores);

  }

  getScore = (team) => {
    let scores = this.props.scores;
    // console.log below prints data in console.
    // console.log(team);
    // console.log(scores);
    for (let i = 0; i < scores.length; i++) {
      if (scores[i].HomeTeam == team) {
        // console.log(team, scores[i].HomeScore);
        return scores[i].HomeScore;
      } else if (scores[i].AwayTeam == team) {
        // console.log(team, scores[i].AwayScore);
        return scores[i].AwayScore;
      }
    }

  }

  render() {
    return (
      <tr>
        <th scope="col">
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.AwayTeamName.toLowerCase() + '.png')} /><br />
            <img className="logo" alt="NFL Logo" src={require('../../../../static/images/' + this.props.game.HomeTeamName.toLowerCase() + '.png')} />
          </th>
          <td>{this.props.getTeamName(this.props.game.AwayTeamName)} {this.getScore(this.props.game.AwayTeamName)}<br />
            <br />
            {this.props.getTeamName(this.props.game.HomeTeamName)} {this.getScore(this.props.game.HomeTeamName)}
          </td>
          <th scope="col">
            {this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].AwayPointSpread}<br />
            <br />{this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].HomePointSpread}
          </th>
          <th scope="col">
            {this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].AwayMoneyLine}<br />
            <br />{this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].HomeMoneyLine}
          </th>
          <th scope="col">{this.props.game.PregameOdds[1] && this.props.game.PregameOdds[1].OverUnder}
        </th>
      </tr>
    );
  }
}

export default NFLOddsItem;
