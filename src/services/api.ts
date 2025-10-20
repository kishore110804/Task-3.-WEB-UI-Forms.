import axios from 'axios'
import { Task, Execution } from '../types/task.types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  timeout: 10000,
})

export async function getTasks() {
  const r = await api.get<Task[]>('/tasks')
  return r.data
}

export async function getTaskById(id: string | number) {
  const r = await api.get<Task>(`/tasks/${id}`)
  return r.data
}

export async function saveTask(task: Task) {
  const r = await api.put<Task>('/tasks', task)
  return r.data
}

export async function deleteTask(id: string | number) {
  const r = await api.delete(`/tasks/${id}`)
  return r.data
}

export async function searchTasks(name: string) {
  const r = await api.get<Task[]>(`/tasks/search`, { params: { name } })
  return r.data
}

export async function executeTask(id: string | number) {
  const r = await api.put<Execution>(`/tasks/${id}/execute`)
  return r.data
}

export async function getExecutions(id: string | number) {
  const r = await api.get<Execution[]>(`/tasks/${id}/executions`)
  return r.data
}

export default api
