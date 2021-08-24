import React, { Component } from 'react';
import { logIn, signUp, getUser } from './fetch-utils.js';
import classNames from 'classnames';

class Auth extends Component {
    state = {
        email:'',
        password:'',
        message:'',
        error: false
    };
    getType = () => {
        return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
    };
    render () {
        return (
            <>
                <h1>{this.getType()}</h1>
                <form>
                    <div className='auth-form'>
                        <label>Email: </label>
                        <input
                        type='email'
                        onChange={(e) =>
                        this.setState({ email: e.target.value })} 
                        />
                    </div>
                    <div className='auth-form'>
                        <label>Password: </label>
                        <input type='password'
                        onChange={(e) =>
                        this.setState({ password: e.target.value})}
                        />                                                      
                    </div>
                    <button>{this.getType()}</button>
                </form>
            </>
        )
    }
}

export default Auth;