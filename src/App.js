// Vendor Assets
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';

// Electron
import Home from './containers/Home';
import GenerateKeyPair from './containers/GenerateKeyPair';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/newKey" component={GenerateKeyPair}/>
      </div>
    );
  }
}

export default App;
