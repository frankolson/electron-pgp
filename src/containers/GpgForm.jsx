// Vendor Assets
import React, { Component } from 'react';
import styled from 'styled-components'
import { Button, Col, Form, Input, Row } from 'antd';

// Project Assets
import * as pgp from '../utils/pgp';

const ButtonCol = styled(Col)`
  display: flex;
  justify-content: center;
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
      <Row>
        <Input.Group>
          <Col span={12}>
            <Input
              onChange={e => this.updateField('keypairName', e.target.value)}
              type="text"
              placeholder="Enter the name of the keypair here"
              value={keypairName}
            />
          </Col>

          <Col span={12}>
            <Input
              onChange={e => this.updateField('name', e.target.value)}
              type="text"
              placeholder="Enter your name here"
              value={name}
            />
          </Col>
        </Input.Group>

        <br />

        <Input.Group>
          <Col span={12}>
            <Input
              onChange={e => this.updateField('email', e.target.value)}
              type="text"
              placeholder="Enter your email here"
              value={email}
            />
          </Col>

          <Col span={12}>
            <Input
              onChange={e => this.updateField('passphrase', e.target.value)}
              type="password"
              placeholder="Super secret passphrase here"
              value={passphrase}
            />
          </Col>
        </Input.Group>

        <br />

        <Input.Group>
          <ButtonCol span={24}>
            <Button
              type="primary"
              icon="key"
              loading={generating}
              onClick={this.generateKey}
            >
              Generate PGP Keys
            </Button>
          </ButtonCol>
        </Input.Group>

        <br />

        <Input.Group>
          <Col span={12}>
            <Form.Item
              label="Private Key"
              formLayout="horizontal"
            >
              <Input.TextArea
                onChange={e => this.updateField('privateKey', e.target.value)}
                rows="6"
                placeholder="Your future private key"
                value={privateKey}
              />
          </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Private Key"
              formLayout="horizontal"
            >
              <Input.TextArea
                onChange={e => this.updateField('publicKey', e.target.value)}
                rows="6"
                placeholder="Your future public key"
                value={publicKey}
              />
            </Form.Item>
          </Col>
        </Input.Group>

        <br />

        <Input.Group>
          <ButtonCol span={24}>
            <Button
              type="primary"
              icon="save"
              loading={saving}
              onClick={this.generateKey}
              disabled={!(privateKey.length && publicKey.length)}
            >
              Save PGP Keypair
            </Button>
          </ButtonCol>
        </Input.Group>
      </Row>
    );
  }
}

export default GpgForm;
