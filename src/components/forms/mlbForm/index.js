import React, { Component } from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

class MLBForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.getInput}>
      <div className="row">
        <div className="col">
          <input type="submit" className="btn btn-primary" value="Spread" />
          <input type="submit" className="btn btn-primary" value="MoneyLine" />
          <input type="submit" className="btn btn-primary" value="OverUnder" />
        </div>
        <div className="col">
          <select className="form-control" name="date">
            <option defaultValue>Date...</option>
            <option value="2018-SEP-01">2018-09-01</option>
            <option value="2018-SEP-02">2018-09-02</option>
            <option value="2018-SEP-03">2018-09-03</option>
            <option value="2018-SEP-04">2018-09-04</option>
            <option value="2018-SEP-05">2018-09-05</option>
            <option value="2018-SEP-06">2018-09-06</option>
            <option value="2018-SEP-07">2018-09-07</option>
            <option value="2018-SEP-08">2018-09-08</option>
            <option value="2018-SEP-09">2018-09-09</option>
            <option value="2018-SEP-10">2018-09-10</option>

          </select>

        </div>
          <input type="submit" className="btn btn-primary" value="Get Odds" />
        </div>
      </form>
    );
  }
}

export default MLBForm;
