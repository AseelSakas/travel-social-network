import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Login from './Component/Login'
import Register from './Component/Register'
import Profile from './Component/Profile'
import MapComp from './Component/MapComp'
import {Redirect} from "react-router-dom";
import MapContainer from "./Component/MapContainer";


function isLoggedIn() {
  if (localStorage.usertoken) {
    return true
  }
  return false
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={(props) => (
              isLoggedIn() ? (
                  <Landing {...props} />) : (<Redirect to="/login"/> )
          )}/>
          <div className="container">
            <Route exact path="/register" render={(props) => (
                !isLoggedIn() ? (
                    <Register {...props} />) : (<Redirect to="/profile"/> )
            )}/>
            <Route exact path="/login" render={(props) => (
                !isLoggedIn() ? (
                    <Login {...props} />) : (<Redirect to="/profile"/> )
            )}/>
             <Route exact path="/users/:id" render={(props) => (
                isLoggedIn() ? (
                    <Profile {...props} />) : (<Redirect to="/login"/> )
            )}/>
            <Route exact path="/profile/:id" render={(props) => (
                isLoggedIn() ? (
                    <Profile {...props} />) : (<Redirect to="/login"/> )
            )}/>

            <Route exact path="/map/:id" render={(props) => (
                isLoggedIn() ? (
                    <MapComp {...props} />) : (<Redirect to="/login"/> )
            )}/>

          </div>
        </div>
      </Router>
    )
  }
}


export default App;
