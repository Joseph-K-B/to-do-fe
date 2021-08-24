import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {};
    render() {
        return (
            <header>
                <NavLink  exact to='/' className='nav'>Home</NavLink>
                <NavLink  to='/signup' className='nav'>Sign up</NavLink>
                <NavLink  to='/signin' className='nav'>Sign in</NavLink>
            </header>
        );
    }
}

export default Header;