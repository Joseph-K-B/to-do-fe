import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect, 
} from 'react-router-dom';
import ToDos from './ToDos.js'
import Header from './Header.js';
import Auth from './Auth.js'
// import Home from './Home.js';

class Home extends Component {
  render() {
    console.log(this.props);
    return <h1>Home</h1>
  }
}

class App extends Component {
  state = {
    token: localStorage.getItem('TOKEN'),
  };
  setToken = (val) => {
   this.setState({ token: val });
 };
   render() {
    return (
      
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path= '/' component = {Home} />
              <Route 
                path='/signin'
                render={(routerProps) => (
                  <Auth 
                    setToken={this.setToken}
                    type='signin'
                    {...routerProps} />
                )}
              />
              <Route 
                path='/signup'
                render={(routerProps) => (
                  <Auth 
                    setToken={this.setToken}
                    type='signup'
                    {...routerProps} />
                )}
              />
              <Route 
                path='/todos'
                render={(routerProps) =>
                  this.state.token ? (
                    <ToDos {...routerProps} />
                  ) : (
                    <Redirect to='/signin' />
                  )}
              />
            </Switch>
        </BrowserRouter>
    
    )
  }
}

export default App;
                
