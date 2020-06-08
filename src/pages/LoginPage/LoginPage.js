import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/user';
import '../../main.css';


class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <header className="header">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="container">
            <div>
              <input 
              type="email" 
              className="container" 
              placeholder="Email" 
              value={this.state.email} 
              name="email" 
              onChange={this.handleChange} />
            </div>
          </div>
          <br  />
          <div className="form-group">
            <div>
              <input 
              type="password" 
              className="container" 
              placeholder="Password" 
              value={this.state.pw} 
              name="pw" 
              onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div>
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
