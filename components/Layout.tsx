import React, {ReactChildren, useState} from 'react';
import { Breadcrumb, Layout, Menu, theme, Row, Col, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useAuth from './useAuth';
const { Header, Content, Footer } = Layout;
const items: MenuProps['items'] = [
  {
    label: <Link href="/profile" >Profile</Link>,
    key: 'profile',
    icon: <UserOutlined />,
    
  },
  // {
  //   label: 'Navigation Two',
  //   key: 'app',
  //   icon: <AppstoreOutlined />,
  //   disabled: true,
  // },
  
  
];
const AppLayout = ({children}:any) => {
  const router = useRouter()
  const [current, setCurrent] = useState('mail');
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { logout } = useAuth();
  
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const handleLogout = () => {
    logout()
    // localStorage.clear()
    // router.push('/')
  }

  return (
    <Layout className="layout">
      <Header>
        {/* <Row></Row> */}
        <div className="logo" />
        <div className="bt-logout"> <Button type="primary" onClick={handleLogout}> Logout </Button></div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
        />
       
       
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default AppLayout;