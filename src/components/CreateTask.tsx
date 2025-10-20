import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card, Typography, Alert, App } from 'antd'
import { ArrowLeftOutlined, CodeOutlined, UserOutlined, SaveOutlined } from '@ant-design/icons'
import { saveTask } from '../services/api'
import { Task } from '../types/task.types'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

const CreateTask: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const { message } = App.useApp()

  const handleSubmit = async (values: Task) => {
    try {
      setLoading(true)
      await saveTask(values)
      message.success('Task created successfully!')
      setTimeout(() => {
        navigate('/tasks')
      }, 1000)
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Failed to create task')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const validateCommand = (_: any, value: string) => {
    const dangerousPatterns = ['rm -rf /', 'mkfs', ':(){:|:&};:', 'dd if=/dev/random']
    const hasDangerous = dangerousPatterns.some((pattern) =>
      value?.toLowerCase().includes(pattern.toLowerCase())
    )
    if (hasDangerous) {
      return Promise.reject(new Error('Command contains potentially dangerous operations'))
    }
    return Promise.resolve()
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ marginBottom: 16 }}
        >
          Back
        </Button>
        <Title level={1} style={{ marginBottom: 8 }}>
          Create Task
        </Title>
        <Paragraph style={{ fontSize: 16, color: '#888', margin: 0 }}>
          Define a new shell command task
        </Paragraph>
      </div>

      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label={
              <span>
                <CodeOutlined /> Task Name
              </span>
            }
            name="name"
            rules={[{ required: true, message: 'Please enter task name' }]}
          >
            <Input placeholder="e.g., Print System Info" size="large" />
          </Form.Item>

          <Form.Item
            label={
              <span>
                <UserOutlined /> Owner
              </span>
            }
            name="owner"
            rules={[{ required: true, message: 'Please enter owner name' }]}
          >
            <Input placeholder="e.g., John Smith" size="large" />
          </Form.Item>

          <Form.Item
            label="Shell Command"
            name="command"
            rules={[
              { required: true, message: 'Please enter command' },
              { validator: validateCommand },
            ]}
          >
            <TextArea
              placeholder='e.g., echo "Hello World" && date'
              rows={4}
              style={{ fontFamily: 'monospace' }}
            />
          </Form.Item>

          <Alert
            message="Example Commands"
            description={
              <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
                <div>echo "Hello World"</div>
                <div>ls -la</div>
                <div>date && uptime</div>
                <div>curl https://api.github.com</div>
              </div>
            }
            type="info"
            style={{ marginBottom: 24 }}
          />

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                loading={loading}
                size="large"
              >
                Create Task
              </Button>
              <Button size="large" onClick={() => navigate(-1)}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      <Card style={{ marginTop: 16, background: 'rgba(37, 99, 235, 0.05)', borderColor: 'rgba(37, 99, 235, 0.2)' }}>
        <Paragraph style={{ margin: 0, color: '#888' }}>
          <strong style={{ color: '#5b9eff' }}>ℹ️ About Task Execution:</strong> Tasks will be executed in isolated
          Kubernetes pods using a busybox image. Commands are validated for basic security but should still be reviewed
          carefully.
        </Paragraph>
      </Card>
    </div>
  )
}

const Space: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', gap: 8 }}>{children}</div>
)

export default CreateTask
