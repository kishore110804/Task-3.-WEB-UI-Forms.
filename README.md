# 🧩 Task 3 - WEB UI Forms

A **modern web interface** for the **Kaiburr Task Manager API**, built using **React 19**, **TypeScript**, and **Ant Design**.

> **Created by:** **Kishore N**  
> **Kaiburr Assessment - Task 3 (October 2025)**

---

## 🚀 Overview

This project is **Task 3** of the Kaiburr assessment — a **React-based frontend** for managing tasks via the REST API (Task 1).  
It allows you to create, view, search, delete, and execute tasks with real-time feedback and execution history tracking.

---

## ✨ Features

✅ **CRUD Operations** – Create, view, search, and delete tasks  
✅ **Command Execution** – Execute shell commands via UI  
✅ **Execution History** – View all past runs with timestamps  
✅ **Dark Theme** – Sleek Ant Design dark theme with Inter font  
✅ **Responsive Design** – Optimized for all screen sizes  
✅ **Type-Safe** – Fully written in TypeScript  

---

## 🧠 Tech Stack

| Technology | Version | Purpose |
|-------------|----------|----------|
| **React** | 19.0.0 | Frontend framework |
| **TypeScript** | 5.5.0 | Type safety |
| **Ant Design** | 5.0.0 | UI components |
| **Vite** | 5.4.21 | Build tool & dev server |
| **Axios** | 1.5.0 | HTTP client |
| **React Router** | 6.15.0 | Client-side routing |
| **Lucide React** | 0.546.0 | Icons |
| **Day.js** | 1.11.10 | Date formatting |



---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git
cd Task-3.-WEB-UI-Forms.

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:8080/api" > .env

# Run the app
npm run dev

```
## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| DELETE | `/api/tasks/{id}` | Delete a task |
| GET | `/api/tasks/search?name={name}` | Search tasks by name |
| POST | `/api/tasks/{id}/execute` | Execute a task command |
| GET | `/api/tasks/{id}/executions` | View execution history |

---



---

## 📸 Screenshots

### Dashboard
![Dashboard](screenshots/home%20page.png)

### Task List
![Task List](screenshots/task%20list.png)

### Create Task
![Create Task](screenshots/create%20task%20form.png)

### Task Details
![Task Details](screenshots/detailes%20of%20the%20task.png)

### Execution History
![Execution History](screenshots/execution%20history.png)

### API Before / After
| Before | After |
|--------|--------|
| ![Before](screenshots/api%20before.png) | ![After](screenshots/api%20after.png) |

---

## 📘 Repository

🔗 [GitHub - Task 3: WEB UI Forms](https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git)

---

## 👤 Author

**Kishore N**  
📅 October 2025  
🚀 *Kaiburr Assessment – Task 3 (Web UI Forms)*  

> *Built with ❤️ using React, TypeScript, and Ant Design.*


