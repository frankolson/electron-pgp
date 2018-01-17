// Vendor Assets
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare } from '@fortawesome/fontawesome-free-solid';

const NavigationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NavLink = styled(Link)`
  color: white;
  margin-top: 40px;
`

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavLink to="/">
          <FontAwesome icon={faHome} size="2x" />
        </NavLink>

        <NavLink to="/newKey">
          <FontAwesome icon={faPlusSquare} size="2x" />
        </NavLink>
      </NavigationContainer>
    );
  }
}

export default Navigation;
