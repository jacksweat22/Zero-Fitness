import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const nav = props.user ?
        <div class="navity">
            
            
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            
            <Link to="/" className="nav-link">Exercises</Link>
            
            <Link to=''className="nav-link" onClick={props.handleLogout}>Log out</Link>
           
            <span className='nav-link'>WELCOME, {props.user.name}</span>
            
        </div>
        :
        <div className="nav">
            <Link to="/create" className="nav-link">Create Exercise Log</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/" className="nav-link">Exercises</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/login' className="nav-link">Log in</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className="nav-link">Sign up</Link>
            
        </div>
    return (
        <div className='NavBar'>
            {nav}
        </div>
    )}
export default NavBar;