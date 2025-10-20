export interface TaskExecution {
  startTime: string
  endTime: string
  output: string
}

export interface Task {
  id?: string
  name: string
  owner: string
  command: string
  taskExecutions?: TaskExecution[]
}

export interface Execution {
  id?: number
  taskId: number
  output: string
  exitCode?: number
  startedAt?: string
  finishedAt?: string
}
