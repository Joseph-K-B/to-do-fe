import React, { Component } from 'react';
// import { getToken } from './fetch-utils.js';


class Auth extends Component {
    state = {
        email:'',
        password:''
    };
    getType = () => {
        return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
    };
    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const token = await getToken(
    //         {
    //             email: this.state.email,
    //             password: this.state.password,
    //         },
    //         this.props.type
    //     );
    //     this.props.setToken(token);
    //     this.props.history.push('/todos')
    // }
    render () {
        console.log(this.props)
        console.log(this.getType())
        const type = this.getType()
        return (
            <>
                <h1>{type}</h1>
                <form>
                    <fieldset>
                        <label>Email:</label>
                        <input
                            type='email'
                            onChange={(e) => 
                                this.setState({ email: e.target.value })
                            }
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password:</label>
                        <input
                            type='password'
                            onChange={(e) => 
                                this.setState({ password: e.target.value })
                            }
                        />
                    </fieldset>
                    <button>{type}</button>
                </form>
            </>
        );
    }
}
                    

export default Auth;