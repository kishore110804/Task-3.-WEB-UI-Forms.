import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Card,
  Button,
  Typography,
  Spin,
  Descriptions,
  Timeline,
  Empty,
  Popconfirm,
  Alert,
  Tag,
  Space,
  App,
} from 'antd'
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  PlayCircleOutlined,
  CopyOutlined,
  CheckOutlined,
  CloseOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import { getTasks, executeTask, getExecutions, deleteTask } from '../services/api'
import { Task, Execution } from '../types/task.types'

const { Title, Paragraph, Text } = Typography

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { message } = App.useApp()

  const [task, setTask] = useState<Task | null>(null)
  const [executions, setExecutions] = useState<Execution[]>([])
  const [loading, setLoading] = useState(true)
  const [executing, setExecuting] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    loadTaskData()
  }, [id])

  const loadTaskData = async () => {
    if (!id) return

    try {
      setLoading(true)
      const tasks = await getTasks()
      const currentTask = tasks.find((t) => t.id?.toString() === id)

      if (!currentTask) {
        message.error('Task not found')
        return
      }

      setTask(currentTask)

      // Load executions
      try {
        const execs = await getExecutions(id)
        setExecutions(execs)
      } catch (err) {
        console.warn('Could not load executions:', err)
      }
    } catch (error) {
      message.error('Failed to load task')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleExecute = async () => {
    if (!task?.id) return

    try {
      setExecuting(true)
      await executeTask(task.id)
      message.success('Task executed successfully!')
      setTimeout(() => {
        loadTaskData()
      }, 1000)
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Failed to execute task')
      console.error(error)
    } finally {
      setExecuting(false)
    }
  }

  const handleDelete = async () => {
    if (!task?.id) return

    try {
      await deleteTask(task.id)
      message.success('Task deleted successfully')
      navigate('/tasks')
    } catch (error) {
      message.error('Failed to delete task')
      console.error(error)
    }
  }

  const copyToClipboard = async () => {
    if (!task?.command) return

    try {
      await navigator.clipboard.writeText(task.command)
      setCopied(true)
      message.success('Command copied to clipboard')
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      message.error('Failed to copy command')
    }
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 100 }}>
        <Spin size="large" />
      </div>
    )
  }

  if (!task) {
    return (
      <Card>
        <Empty description="Task not found">
          <Button onClick={() => navigate('/tasks')}>Back to Tasks</Button>
        </Empty>
      </Card>
    )
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ marginBottom: 16 }}
        >
          Back
        </Button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <Title level={1} style={{ marginBottom: 8 }}>
              {task.name}
            </Title>
            <Text type="secondary">Task ID: {task.id}</Text>
          </div>
          <Space>
            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              onClick={handleExecute}
              loading={executing}
              size="large"
            >
              {executing ? 'Executing...' : 'Execute'}
            </Button>
            <Popconfirm
              title="Delete Task"
              description="Are you sure you want to delete this task? This action cannot be undone."
              onConfirm={handleDelete}
              okText="Yes, Delete"
              cancelText="Cancel"
            >
              <Button danger icon={<DeleteOutlined />} size="large">
                Delete
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </div>

      {/* Task Details */}
      <Card title="Task Details" style={{ marginBottom: 16 }}>
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Task ID">{task.id}</Descriptions.Item>
          <Descriptions.Item label="Name">{task.name}</Descriptions.Item>
          <Descriptions.Item label="Owner">{task.owner}</Descriptions.Item>
          <Descriptions.Item label="Command">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="code-block" style={{ flex: 1, margin: 0 }}>
                {task.command}
              </div>
              <Button
                type="text"
                icon={copied ? <CheckOutlined /> : <CopyOutlined />}
                onClick={copyToClipboard}
                style={{ marginLeft: 8 }}
              >
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Execution History */}
      <Card
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Execution History</span>
            <Tag color="blue">
              {executions.length} {executions.length === 1 ? 'execution' : 'executions'}
            </Tag>
          </div>
        }
      >
        {executions.length === 0 ? (
          <Empty
            description="No executions yet"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ padding: 40 }}
          >
            <Paragraph style={{ color: '#888' }}>Click "Execute" to run this task</Paragraph>
          </Empty>
        ) : (
          <Timeline>
            {executions.map((execution, index) => {
              const success = execution.exitCode === 0
              const duration =
                execution.startedAt && execution.finishedAt
                  ? new Date(execution.finishedAt).getTime() - new Date(execution.startedAt).getTime()
                  : 0

              return (
                <Timeline.Item
                  key={execution.id || index}
                  dot={
                    success ? (
                      <CheckOutlined style={{ fontSize: 16, color: '#52c41a' }} />
                    ) : (
                      <CloseOutlined style={{ fontSize: 16, color: '#ff4d4f' }} />
                    )
                  }
                  color={success ? 'green' : 'red'}
                >
                  <Card size="small" style={{ marginTop: 8 }}>
                    <div style={{ marginBottom: 12 }}>
                      <Text strong>Execution #{executions.length - index}</Text>
                      <div style={{ marginTop: 4 }}>
                        <Tag color={success ? 'success' : 'error'}>Exit Code: {execution.exitCode ?? 'N/A'}</Tag>
                        {duration > 0 && <Tag icon={<ClockCircleOutlined />}>{duration}ms</Tag>}
                        {execution.startedAt && (
                          <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>
                            {new Date(execution.startedAt).toLocaleString()}
                          </Text>
                        )}
                      </div>
                    </div>
                    {execution.output && (
                      <div>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          Output:
                        </Text>
                        <pre className="code-block" style={{ marginTop: 8, whiteSpace: 'pre-wrap' }}>
                          {execution.output}
                        </pre>
                      </div>
                    )}
                  </Card>
                </Timeline.Item>
              )
            })}
          </Timeline>
        )}
      </Card>
    </div>
  )
}

export default TaskDetail
