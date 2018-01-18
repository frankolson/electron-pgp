// Vendor Assets
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

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

class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Navigation />

        <Layout>
          <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Route exact path="/" component={Home}/>

            <Route exact path="/newKey" component={GenerateKeyPair}/>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
