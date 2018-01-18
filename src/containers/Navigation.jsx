// Vendor Assets
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

class Navigation extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
    });
  }

  render() {
    return (
      <Layout.Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/newKey">
              <Icon type="key" />
              <span>Generate Key</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default Navigation;
