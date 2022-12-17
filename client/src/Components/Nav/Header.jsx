import React from 'react'
import { Menu } from 'antd';
import { HomeOutlined ,UserOutlined,UserAddOutlined,  SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const items = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'User Name',
    key: 'user',
  
    icon: <SettingOutlined />,
    style: { marginRight:"70%" } ,
    children: [
      {
        label: 'Option 1',
        key: 'setting:1',
       
        
      },
      {
        label: 'Option 2',
        key: 'setting:2',
       
       
      },
    ],
  },
  {
    label: <Link to="/register">Register</Link>,
    key: 'register',
    icon: <UserAddOutlined />,
   
  },
  
  {
    label: <Link to="/login">Login</Link>,
    key: 'login',
    icon: <UserOutlined />,
   
   
  },
  
];


export const Header = () => {

  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  };
  return (
  <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />
  )
}
