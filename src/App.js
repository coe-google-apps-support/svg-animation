import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './css/App.css';
import SVGView from './svg-view.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SVGView></SVGView>
      </div>
    );
  }
}

export default App;
