import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Tokens from '../utils/Tokens';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }


    console.log(exercise);
    const config = {
      headers: {
        'Authorization': 'Bearer ' + Tokens.getToken()
      }
    }
    axios.post('http://localhost:3000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div> 
          <label>Description: </label>
          <input  type="text"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div>
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div>
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div>
          <input type="submit" value="Create Exercise Log" className="button" />
        </div>
      </form>
    </div>
    )
  }
}