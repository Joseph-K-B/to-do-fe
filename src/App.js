import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Auth from './Auth.js'
import Home from './Home.js';

class Home extends Component {
  render() {
    return <h1>Home</h1>
  }
}

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <section>
            <Switch>
              <Route exact path= '/' component = {Home}></Route>
              <Route 
                exact path= '/signup' 
                render = {() => <Auth type='signup'>
                </Auth>}>
              </Route>
              <Route 
                exact path= '/signin' 
                render = {() => <Auth type='signin'>
                  </Auth>}>
              </Route>


                
            </Switch>
          </section>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
