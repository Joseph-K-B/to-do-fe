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
    loggedIn: false,
  };
  setLoggedIn = (val) => {
   this.setState({ loggedin: val });
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
                    setLoggedIn={this.setLoggedIn}
                    type='signin'
                    {...routerProps} />
                )}
              />
              <Route 
                path='/signup'
                render={(routerProps) => (
                  <Auth 
                    setLoggedIn={this.setLoggedIn}
                    type='signup'
                    {...routerProps} />
                )}
              />
            </Switch>
        </BrowserRouter>
    
    )
  }
}

export default App;
                
