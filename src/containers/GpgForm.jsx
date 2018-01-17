// Vendor Assets
import React, { Component } from 'react';
import styled from 'styled-components';

const GpgFormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FormGroup = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`

const Label = styled.label`
  flex: 1 0 120px;
  max-width: 220px;
`

const Input = styled.input`
  flex: 1 0 220px;
  padding: 15px;
`

const Button = styled.button`
  margin: auto;
  padding: 8px 16px;
  border: none;
  background: #222;
  color: white;
  text-transform: uppercase;
  letter-spacing: .09em;
  border-radius: 2px;
`

const TextArea = styled.textarea`
  flex: 1 0 220px;
  padding: 10px;
`

class GpgForm extends Component {
  render() {
    return (
      <GpgFormContainer>
        <ul className="flex-outer">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name here"
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email here"
            />
          </FormGroup>

          <FormGroup>
            <Button type="button">Generate GPG Keys</Button>
          </FormGroup>

          <FormGroup>
            <Label for="public-key">Public Key</Label>
            <TextArea
              rows="6"
              id="public-key"
              placeholder="Your future public key"
            ></TextArea>
          </FormGroup>

          <FormGroup>
            <Label for="private-key">Private Key</Label>
            <TextArea
              rows="6"
              id="private-key"
              placeholder="Your future private key"
            ></TextArea>
          </FormGroup>
        </ul>
      </GpgFormContainer>
    );
  }
}

export default GpgForm;
