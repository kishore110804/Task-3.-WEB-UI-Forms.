import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, theme, App as AntApp } from 'antd'
import App from './App'
import './styles.css'

// Suppress React 19 warning for Ant Design
const originalError = console.error
console.error = (...args: any[]) => {
  if (args[0]?.includes?.('antd v5 support React is 16 ~ 18')) return
  originalError.apply(console, args)
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#ffffff',
          colorBgContainer: '#0a0a0a',
          colorBgElevated: '#0a0a0a',
          colorBorder: '#1f1f1f',
          colorText: '#ffffff',
          colorTextSecondary: '#888888',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          borderRadius: 6,
        },
      }}
    >
      <AntApp>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AntApp>
    </ConfigProvider>
  </React.StrictMode>
)
