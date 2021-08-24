import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header.js';
import Auth from './Auth.js'
// import Home from './Home.js';

// class Home extends Component {
//   render() {
//     console.log(this.props);
//     return <h1>Home</h1>
//   }
// }

class App extends Component {
  state = {
    // loggedIn: false,
  };
  // setToken = (val) => {
  //   this.setState({ loggedIn: val });
  // };
  render() {
    return (
      
        <BrowserRouter>
          <Header />
            <Switch>
              {/* <Route exact path= '/' component = {Home} /> */}
              <Route path='/signin'>
                <Auth type='signin' />
              </Route>
              <Route path='/signup'>
                <Auth type='signup' />
              </Route>
            </Switch>
        </BrowserRouter>
    
    )
  }
}

export default App;
                
