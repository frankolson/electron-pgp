// Vendor Assets
import React, { Component } from 'react';
import styled from 'styled-components';

// Project Assets
import GpgForm from './GpgForm'

const GenerateKeyPairContainer = styled.div`
  padding: 20px;
`

class GenerateKeyPair extends Component {
  render() {
    return (
      <GenerateKeyPairContainer>
        <GpgForm />
      </GenerateKeyPairContainer>
    );
  }
}

export default GenerateKeyPair;
