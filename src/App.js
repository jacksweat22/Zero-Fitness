import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import userService from './utils/user';
import SignupPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import  "./main.css";
import './App.css';
import Tokens from './utils/Tokens';

class App extends Component {
  constructor() {
    super();
    this.state = {
    // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      exercises: []

    };
  }

  getExerciseById = (id) => {
    return (
    this.state.exercises.find(e => e._id===id)
    )
    
  }



  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  render() {
  return (
    <Router>
      <Navbar user = {this.state.user} handleLogout = {this.handleLogout} />
      <div className="container">
            <br/>
      <section>
      <Route exact path="/" render={(props) => (
            <ExercisesList
              user={this.state.user}
              handleLogout={this.handleLogout}
              {...props} />
              )}/>
      </section>
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      </div>
      
    </Router>
  );
   }
}

export default App;