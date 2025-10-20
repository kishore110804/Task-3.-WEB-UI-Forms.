import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout as AntLayout } from 'antd'
import AppLayout from './components/Layout'
import Dashboard from './components/Dashboard'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'
import CreateTask from './components/CreateTask'

const { Content } = AntLayout

const App: React.FC = () => {
  return (
    <AppLayout>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px - 70px)' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </Content>
    </AppLayout>
  )
}

export default App
