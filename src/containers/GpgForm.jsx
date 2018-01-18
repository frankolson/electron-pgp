// Vendor Assets
import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

// Project Assets
import * as pgp from '../utils/pgp';

const GpgFormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const FormGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  > label {
    display: flex;
    flex: 1;
  }

  > input {
    display: flex;
    flex: 2;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`

const Results = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const Result = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
`

class GpgForm extends Component {
  state = {
    email: '',
    generating: false,
    keypairName: '',
    name: '',
    passphrase: '',
    privateKey: '',
    publicKey: '',
    saving: false,
  }

  generateKey = () => {
    const { email, name, passphrase } = this.state;

    this.setState({
      generating: true
    })

    pgp.generateKey(email, name, passphrase).then((keys) => {
      this.setState({
        generating: false,
        privateKey: keys.privKey,
        publicKey: keys.pubKey,
      })
    })
  }

  updateField = (field, value) => (
    this.setState({
      [field]: value,
    })
  )

  render() {
    const {
      email, generating, keypairName, name, passphrase, privateKey, publicKey,
      saving,
    } = this.state;

    return (
      <GpgFormContainer>
        <FormGroup>
          <label>Keypair Name</label>

          <input
            onChange={e => this.updateField('keypairName', e.target.value)}
            type="text"
            placeholder="Enter the name of the keypair here"
            value={keypairName}
          />
        </FormGroup>

        <FormGroup>
          <label>Your Name</label>

          <input
            onChange={e => this.updateField('name', e.target.value)}
            type="text"
            placeholder="Enter your name here"
            value={name}
          />
        </FormGroup>

        <FormGroup>
          <label>Email</label>

          <input
            onChange={e => this.updateField('email', e.target.value)}
            type="email"
            placeholder="Enter your email here"
            value={email}
          />
        </FormGroup>

        <FormGroup>
          <label>Passphrase</label>

          <input
            onChange={e => this.updateField('passphrase', e.target.value)}
            type="text"
            placeholder="Super secret passphrase here"
            value={passphrase}
          />
        </FormGroup>

        <ButtonGroup>
          <button
            type="button"
            onClick={this.generateKey}
            disabled={generating}
          >
            {generating ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ): (
              'Generate PGP Keys'
            )}
          </button>

          <button
            type="button"
            disabled={!(privateKey.length && publicKey.length)}
          >
            {saving ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ): (
              'Generate PGP Keys'
            )}
          </button>
        </ButtonGroup>

        <Results>
          <Result>
            <label>Private Key</label>

            <textarea
              onChange={e => this.updateField('privateKey', e.target.value)}
              rows="6"
              placeholder="Your future private key"
              value={privateKey}
            ></textarea>
          </Result>

          <Result>
            <label>Public Key</label>

            <textarea
              onChange={e => this.updateField('publicKey', e.target.value)}
              rows="6"
              placeholder="Your future public key"
              value={publicKey}
            ></textarea>
          </Result>
        </Results>
      </GpgFormContainer>
    );
  }
}

export default GpgForm;
