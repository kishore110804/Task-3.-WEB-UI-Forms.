import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd'
import {
  HomeOutlined,
  UnorderedListOutlined,
  PlusOutlined,
  GithubOutlined,
  CodeOutlined,
} from '@ant-design/icons'

const { Header, Footer } = Layout
const { Text } = Typography

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation()

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '/tasks',
      icon: <UnorderedListOutlined />,
      label: <Link to="/tasks">Tasks</Link>,
    },
    {
      key: '/create',
      icon: <PlusOutlined />,
      label: <Link to="/create">Create Task</Link>,
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: '#000' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#000',
          borderBottom: '1px solid #1f1f1f',
          padding: '0 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: '#fff',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CodeOutlined style={{ color: '#000', fontSize: 18 }} />
            </div>
            <Text strong style={{ color: '#fff', fontSize: 16 }}>
              Kaiburr Task 3
            </Text>
          </Link>
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{
            background: 'transparent',
            border: 'none',
            flex: 1,
            justifyContent: 'center',
          }}
        />

        <a
          href="https://github.com/yourusername/task3"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#888', fontSize: 20 }}
        >
          <GithubOutlined />
        </a>
      </Header>

      {children}

      <Footer
        style={{
          textAlign: 'center',
          background: '#000',
          borderTop: '1px solid #1f1f1f',
          color: '#666',
        }}
      >
        <Text style={{ color: '#666' }}>
          Kaiburr Task 3 © 2025 | Created by <strong style={{ color: '#fff' }}>Kishore N</strong> | Built with React 19, TypeScript & Ant Design
        </Text>
      </Footer>
    </Layout>
  )
}

export default AppLayout
