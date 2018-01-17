// Vendor Assets
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';

// Project Assets
import Home from './containers/Home';
import GenerateKeyPair from './containers/GenerateKeyPair';
import Navigation from './containers/Navigation';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

const Nav = styled.nav`
  width: 60px;
  height: auto;
  background-color: #222;
`

const Main = styled.main`
  flex: 1;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Nav>
          <Navigation />
        </Nav>

        <Main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/newKey" component={GenerateKeyPair}/>
        </Main>
      </AppContainer>
    );
  }
}

export default App;
