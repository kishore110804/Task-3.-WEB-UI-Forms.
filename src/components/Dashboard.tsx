import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Statistic, Typography, Spin, Empty, Button } from 'antd'
import {
  CodeOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  TrophyOutlined,
  ArrowRightOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { getTasks } from '../services/api'
import { Task } from '../types/task.types'

const { Title, Paragraph, Text } = Typography

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      setLoading(true)
      const data = await getTasks()
      setTasks(data)
    } catch (error) {
      console.error('Failed to load tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const recentTasks = tasks.slice(0, 5)

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 32 }}>
        <Title level={1} style={{ marginBottom: 8 }}>
          Dashboard
        </Title>
        <Paragraph style={{ fontSize: 16, color: '#888', margin: 0 }}>
          Manage and execute your Kubernetes tasks • Created by Kishore N
        </Paragraph>
      </div>

      {/* Statistics */}
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Tasks"
              value={tasks.length}
              prefix={<CodeOutlined />}
              loading={loading}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active"
              value={tasks.length}
              prefix={<RocketOutlined />}
              loading={loading}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Completed"
              value={0}
              prefix={<CheckCircleOutlined />}
              loading={loading}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Success Rate"
              value={100}
              suffix="%"
              prefix={<TrophyOutlined />}
              loading={loading}
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Tasks */}
      <Card
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title level={3} style={{ margin: 0 }}>
              Recent Tasks
            </Title>
            <Link to="/tasks">
              <Button type="text" icon={<ArrowRightOutlined />}>
                View all
              </Button>
            </Link>
          </div>
        }
        style={{ marginBottom: 24 }}
      >
        {loading ? (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <Spin size="large" />
          </div>
        ) : recentTasks.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {recentTasks.map((task) => (
              <Link key={task.id} to={`/tasks/${task.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  size="small"
                  hoverable
                  style={{ cursor: 'pointer' }}
                  bodyStyle={{ padding: 16 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <CodeOutlined style={{ color: '#888' }} />
                        <Text strong>{task.name}</Text>
                      </div>
                      <div className="code-block" style={{ marginBottom: 8 }}>
                        {task.command}
                      </div>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        Owner: {task.owner}
                      </Text>
                    </div>
                    <ArrowRightOutlined style={{ color: '#666', fontSize: 16 }} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Empty
            description="No tasks yet"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ padding: 40 }}
          >
            <Link to="/create">
              <Button type="primary" icon={<PlusOutlined />}>
                Create Task
              </Button>
            </Link>
          </Empty>
        )}
      </Card>

      {/* Quick Actions */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card hoverable>
            <div style={{ display: 'flex', gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: '#1a1a1a',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CodeOutlined style={{ fontSize: 24 }} />
              </div>
              <div style={{ flex: 1 }}>
                <Title level={4} style={{ marginBottom: 4 }}>
                  Create New Task
                </Title>
                <Paragraph style={{ color: '#888', marginBottom: 16 }}>
                  Define a new shell command to execute in Kubernetes
                </Paragraph>
                <Link to="/create">
                  <Button type="default">Create</Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card hoverable>
            <div style={{ display: 'flex', gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: '#1a1a1a',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <RocketOutlined style={{ fontSize: 24 }} />
              </div>
              <div style={{ flex: 1 }}>
                <Title level={4} style={{ marginBottom: 4 }}>
                  View All Tasks
                </Title>
                <Paragraph style={{ color: '#888', marginBottom: 16 }}>
                  Browse and manage all your existing tasks
                </Paragraph>
                <Link to="/tasks">
                  <Button type="default">Browse</Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
