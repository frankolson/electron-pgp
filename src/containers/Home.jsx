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
  padding: 20px;
`

const Header = styled.header`
  height: 80px;
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
        </Intro>
      </HomeContainer>
    );
  }
}

export default Home;
