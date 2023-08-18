import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu style={{ backgroundColor: '#f3f3f3' }}>
      <Menu.Item name='home' style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
        DevLink Marketplace
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item name='find-dev' style={{ color: '#000' }}>
          Find Dev
        </Menu.Item>
        <Menu.Item name='find-jobs' style={{ color: '#000' }}>
          Find Jobs
        </Menu.Item>
        <Menu.Item name='login' style={{ color: '#000' }}>
          Login
        </Menu.Item>
        <Menu.Item name='create-account' style={{ color: '#000' }}>
          Create Account
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
