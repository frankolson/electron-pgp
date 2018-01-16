// Vendor Assets
import React, { Component } from 'react';

// Project Assets
import logo from './logo.svg';
import './App.css';

// Electron
const electron = window.require('electron');
const remote = electron.remote;
const fs = remote.require('fs');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <br /><br />

          We are using node {remote.process.versions.node},
          Chrome {remote.process.versions.chrome},
          and Electron {remote.process.versions.electron}.
        </p>
      </div>
    );
  }
}

export default App;
