import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Input, Button, Space, Typography, Card, Popconfirm, Tag, App } from 'antd'
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import { getTasks, deleteTask, searchTasks } from '../services/api'
import { Task } from '../types/task.types'

const { Title } = Typography

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const { message } = App.useApp()

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      setLoading(true)
      const data = await getTasks()
      setTasks(data)
      setSearchQuery('')
    } catch (error) {
      message.error('Failed to load tasks')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (value: string) => {
    setSearchQuery(value)
    if (!value.trim()) {
      loadTasks()
      return
    }

    try {
      setLoading(true)
      const data = await searchTasks(value)
      setTasks(data)
    } catch (error) {
      message.error('Search failed')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string | number | undefined) => {
    if (!id) return

    try {
      await deleteTask(id)
      message.success('Task deleted successfully')
      loadTasks()
    } catch (error) {
      message.error('Failed to delete task')
      console.error(error)
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      render: (id: string) => <Tag color="blue">{id}</Tag>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: Task) => (
        <Link to={`/tasks/${record.id}`}>
          <strong>{name}</strong>
        </Link>
      ),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Command',
      dataIndex: 'command',
      key: 'command',
      render: (command: string) => (
        <div className="code-block" style={{ margin: 0, padding: 8 }}>
          {command}
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      render: (_: any, record: Task) => (
        <Space>
          <Link to={`/tasks/${record.id}`}>
            <Button type="text" icon={<EyeOutlined />} size="small">
              View
            </Button>
          </Link>
          <Popconfirm
            title="Delete Task"
            description="Are you sure you want to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="text" danger icon={<DeleteOutlined />} size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <Title level={1} style={{ marginBottom: 8 }}>
            Tasks
          </Title>
          <Typography.Text style={{ fontSize: 16, color: '#888' }}>
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} total
          </Typography.Text>
        </div>
        <Link to="/create">
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Create Task
          </Button>
        </Link>
      </div>

      <Card>
        <Input.Search
          placeholder="Search tasks by name..."
          allowClear
          size="large"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onSearch={handleSearch}
          prefix={<SearchOutlined />}
          style={{ marginBottom: 16 }}
        />

        <Table
          columns={columns}
          dataSource={tasks}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} tasks`,
          }}
        />
      </Card>
    </div>
  )
}

export default TaskList
