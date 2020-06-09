import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const nav = props.user ?
            <div>
            <Link to="/create" className="navLink">Create Exercise Log</Link>
            
            <Link to="/" className="navLink">Exercises</Link>
            
            <Link to=''className="navLink" onClick={props.handleLogout}>Log out</Link>
            
        </div>
        :
        <div className="nav">
             <>
            <h1>
                <i>Zer0 Fitness</i>
            </h1>
            </>
            <Link to="/create" className="navLink">Create Exercise Log</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="navLink">Exercises</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/login' className="navLink">Log in</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/signup' className="navLink">Sign up</Link>
            
        </div>
    return (
        <div className='NavBar'>
            {nav}
        </div>
    )}
export default NavBar;