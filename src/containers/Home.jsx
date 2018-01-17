// Vendor Assets
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Electron
const electron = window.require('electron');
const remote = electron.remote;
const fs = remote.require('fs'); // eslint-disable-line no-unused-vars

const HomeContainer = styled.div`
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

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header>
          <Title>Welcome to Electron<Splash>GPG</Splash></Title>
        </Header>

        <Intro>
          We are using node {remote.process.versions.node},
          Chrome {remote.process.versions.chrome},
          and Electron {remote.process.versions.electron}.

          <br /><br />

          <Link to="/newKey">Generate a Key Pair</Link>
        </Intro>
      </HomeContainer>
    );
  }
}

export default Home;
