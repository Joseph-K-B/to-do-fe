import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {};
    render() {
        return (
            <header>
                <NavLink exact to='/'>Home</NavLink>
                {this.state.token && (
                    <NavLink to='/todos'>To Do List</NavLink>
                )}
                {!this.state.token && (
                    <>
                        <NavLink to='/signup'>Sign Up</NavLink>
                        <NavLink to='/signin'>Sign In</NavLink>
                        
                    </>
                )}
           
            </header>
            );
    }
}

export default Header;