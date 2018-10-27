import React, { Component } from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

class NHLForm extends Component {
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
            <option value="2018-OCT-20">2018-10-01</option>
            <option value="2018-OCT-21">2018-10-02</option>
            <option value="2018-OCT-22">2018-10-03</option>
            <option value="2018-OCT-23">2018-10-04</option>
            <option value="2018-OCT-24">2018-10-05</option>
            <option value="2018-OCT-25">2018-10-06</option>
            <option value="2018-OCT-26">2018-10-07</option>
            <option value="2018-OCT-27">2018-10-08</option>
            <option value="2018-OCT-28">2018-10-09</option>
            <option value="2018-OCT-29">2018-10-10</option>

          </select>

        </div>
          <input type="submit" className="btn btn-primary" value="Get Odds" />
        </div>
      </form>
    );
  }
}

export default NHLForm;
