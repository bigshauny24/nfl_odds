import React, { Component } from 'react';
import './index.css';

class ScoresForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.getInput}>
      <div className="row">
        <div className="col">

        </div>
        <div className="col">
          <select className="form-control" name="year">
            <option defaultValue>Year...</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
        </div>
        <div className="col">
          <select className="form-control" name="week">
            <option defaultValue>Week...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
          </select>
        </div>
          <input type="submit" className="btn btn-primary" value="Scores" />

        </div>
      </form>
    );
  }
}

export default ScoresForm;
