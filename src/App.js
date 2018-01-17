// Vendor Assets
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

// Electron
const electron = window.require('electron');
const remote = electron.remote;
const fs = remote.require('fs');

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

const AppContainer = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Splash = styled.span`
  color: #61dafb;
`

const Intro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <Title>Welcome to Electron<Splash>GPG</Splash></Title>
        </Header>

        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.

          <br /><br />

          We are using node {remote.process.versions.node},
          Chrome {remote.process.versions.chrome},
          and Electron {remote.process.versions.electron}.
        </Intro>
      </AppContainer>
    );
  }
}

export default App;
