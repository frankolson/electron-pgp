// Vendor Assets
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GenerateKeyPairContainer = styled.div`
  text-align: center;
`

class GenerateKeyPair extends Component {
  render() {
    return (
      <GenerateKeyPairContainer>
        Gunna do stuff here.

        <br /><br />

        <Link to="/">Home</Link>
      </GenerateKeyPairContainer>
    );
  }
}

export default GenerateKeyPair;
