# Task 3 - WEB UI Forms# Task 3 - WEB UI Forms# Task 3 - WEB UI Forms# Task 3 - WEB UI Forms# Task 3 - WEB UI Forms# Task 3 - WEB UI Forms# Task 3 - WEB UI Forms



A web interface for the Task Manager API built with React 19, TypeScript, and Ant Design.



## API EndpointsA web interface for managing tasks built with React 19, TypeScript, and Ant Design. Created by **Kishore N** for the Kaiburr assessment.



| Method | Endpoint | Description |

|--------|----------|-------------|

| GET | `/api/tasks` | Get all tasks |## Features**Created by Kishore N**

| POST | `/api/tasks` | Create a task |

| DELETE | `/api/tasks/{id}` | Delete a task |

| GET | `/api/tasks/search?name={name}` | Search tasks |

| POST | `/api/tasks/{id}/execute` | Execute task command |- Create, view, search, and delete tasks

| GET | `/api/tasks/{id}/executions` | Get execution history |

- Execute shell commands through the UI

## Screenshots

- View execution history with timestampsModern React 19 + TypeScript + Ant Design frontend for the Kaiburr Task Manager. Features a sleek dark theme with full CRUD operations, command execution, and execution history tracking.> **Kaiburr Task Manager - Modern Web Interface**  

![Home Page](screenshots/home%20page.png)

- Dark theme with clean, modern design

![Task List](screenshots/task%20list.png)

- Fully responsive

![Create Task](screenshots/create%20task%20form.png)



![Task Details](screenshots/detailes%20of%20the%20task.png)

## How to Run---> Created by **Kishore N**

![Execution History](screenshots/execution%20history.png)



![API Before](screenshots/api%20before.png)

1. Clone this repository

![API After](screenshots/api%20after.png)

```bash

## Features

git clone https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git## 🚀 Quick Start> **Kaiburr Task Manager - Modern Web Interface**  

- Create tasks with name, owner, and command

- View all tasks in a tablecd Task-3.-WEB-UI-Forms.

- Search tasks by name

- Delete tasks```

- Execute shell commands

- View execution history with timestamps

- Dark theme UI

2. Install dependencies```powershellA production-ready React 19 + TypeScript + Ant Design frontend application for managing tasks with command execution capabilities. Features a sleek dark theme with the Inter font family, providing an intuitive interface for CRUD operations, task execution, and history tracking.

---

```bash

Made by **Kishore N**

npm install# Clone the repository

```

git clone https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git> Created by **Kishore N**

3. Create a `.env` file with your backend URL

```bashcd Task-3.-WEB-UI-Forms.

VITE_API_URL=http://localhost:8080/api

```---



4. Start the app# Install dependencies

```bash

npm run devnpm install> **Kaiburr Task Manager - Modern Web Interface**  > **Kaiburr Task Manager - Modern Web Interface**  

```



Make sure your backend (Task 1) is running on port 8080 before starting the frontend.

# Create .env file## 📋 Table of Contents

## Screenshots

echo "VITE_API_URL=http://localhost:8080/api" > .env

### Dashboard

![Home Page](screenshots/home%20page.png)A production-ready React 19 + TypeScript + Ant Design frontend application for managing tasks with command execution capabilities. Features a sleek dark theme with the Inter font family, providing an intuitive interface for CRUD operations, task execution, and history tracking.



### Task List# Start development server

![Task List](screenshots/task%20list.png)

npm run dev- [Overview](#overview)

### Create Task

![Create Task](screenshots/create%20task%20form.png)```



### Task Details- [Features](#features)> Created by **Kishore N**> Created by **Kishore N**

![Task Details](screenshots/detailes%20of%20the%20task.png)

**Prerequisites:** Node.js 20+, Backend API running on `http://localhost:8080`

### Execution History

![Execution History](screenshots/execution%20history.png)- [Technology Stack](#technology-stack)



### API Integration---

![API Before](screenshots/api%20before.png)

![API After](screenshots/api%20after.png)- [Prerequisites](#prerequisites)---



## Tech Stack## 📸 Screenshots



- React 19- [Installation & Setup](#installation--setup)

- TypeScript

- Ant Design### Dashboard

- Vite

- Axios![Home Page](screenshots/home%20page.png)- [Application Screenshots](#application-screenshots)



## Project Structure



```### Task Management- [Project Structure](#project-structure)

src/

├── components/          # React components![Task List](screenshots/task%20list.png)

├── services/           # API calls

└── types/             # TypeScript types![Create Task](screenshots/create%20task%20form.png)- [API Integration](#api-integration)## 📋 Table of Contents

```



## API Endpoints Used

### Task Details & Execution- [Environment Configuration](#environment-configuration)

- `GET /api/tasks` - Get all tasks

- `POST /api/tasks` - Create a task![Task Details](screenshots/detailes%20of%20the%20task.png)

- `DELETE /api/tasks/{id}` - Delete a task

- `GET /api/tasks/search?name={name}` - Search tasks![Execution History](screenshots/execution%20history.png)- [Repository](#repository)A production-ready React 19 + TypeScript + Ant Design frontend application for managing tasks with command execution capabilities. Features a sleek dark theme with the Inter font family, providing an intuitive interface for CRUD operations, task execution, and history tracking.A production-ready React 19 + TypeScript + Ant Design frontend application for managing tasks with command execution capabilities. Features a sleek dark theme with the Inter font family, providing an intuitive interface for CRUD operations, task execution, and history tracking.

- `POST /api/tasks/{id}/execute` - Execute command

- `GET /api/tasks/{id}/executions` - Get execution history



---### API Integration- [Author](#author)



**Kishore N** | October 2025![API Before](screenshots/api%20before.png)


![API After](screenshots/api%20after.png)- [Overview](#overview)



------



## ✨ Features- [Features](#features)



- ✅ **CRUD Operations** - Create, read, search, and delete tasks## 🎯 Overview

- ✅ **Command Execution** - Execute shell commands with real-time output

- ✅ **Execution History** - View complete timeline of past executions- [Technology Stack](#technology-stack)

- ✅ **Dark Theme** - Custom Ant Design dark theme with Inter font

- ✅ **Responsive Design** - Works seamlessly on all devicesThis project is **Task 3** of the Kaiburr assessment, implementing a complete web UI for the Task Manager REST API (Task 1). The application provides a modern, responsive interface built with React 19 and Ant Design, following industry best practices and design patterns.

- ✅ **Type Safety** - Full TypeScript implementation

- [Prerequisites](#prerequisites)------

---

**Key Highlights:**

## 🛠️ Tech Stack

- ✅ Full CRUD operations (Create, Read, Update, Delete)- [Installation & Setup](#installation--setup)

| Technology | Version | Purpose |

|------------|---------|---------|- ✅ Real-time task search functionality

| React | 19.0.0 | Frontend framework |

| TypeScript | 5.5.0 | Type safety |- ✅ Command execution with output display- [Application Screenshots](#application-screenshots)

| Ant Design | 5.0.0 | UI components |

| Vite | 5.4.21 | Build tool |- ✅ Execution history tracking with timeline view

| Axios | 1.5.0 | HTTP client |

- ✅ Dark theme with custom Ant Design configuration- [Project Structure](#project-structure)

---

- ✅ Fully responsive design for all devices

## 📂 Project Structure

- ✅ TypeScript for type safety and better developer experience- [API Integration](#api-integration)## 📋 Table of Contents## 📋 Table of Contents

```

src/

├── components/

│   ├── Layout.tsx          # Main layout---- [Environment Configuration](#environment-configuration)

│   ├── Dashboard.tsx       # Home page

│   ├── TaskList.tsx        # Task table

│   ├── CreateTask.tsx      # Task form

│   └── TaskDetail.tsx      # Task details## ✨ Features- [Repository](#repository)

├── services/

│   └── api.ts              # API client

└── types/

    └── task.types.ts       # TypeScript types### 📊 Dashboard- [Author](#author)

```

- Overview statistics (Total Tasks, Active Tasks, Completed Tasks, Success Rate)

---

- Recent tasks display with quick access- [Overview](#overview)- [Overview](#overview)

## 🔌 API Endpoints

- Quick action cards for common operations

| Method | Endpoint | Description |

|--------|----------|-------------|---

| GET | `/api/tasks` | Get all tasks |

| POST | `/api/tasks` | Create task |### 📝 Task Management

| DELETE | `/api/tasks/{id}` | Delete task |

| GET | `/api/tasks/search?name={name}` | Search tasks |- Create new tasks with form validation- [Features](#features)- [Features](#features)

| POST | `/api/tasks/{id}/execute` | Execute command |

| GET | `/api/tasks/{id}/executions` | Get history |- View all tasks in a paginated table



---- Real-time search by task name## 🎯 Overview



## 👤 Author- Delete tasks with confirmation dialog



**Kishore N**  - View detailed task information- [Technology Stack](#technology-stack)- [Technology Stack](#technology-stack)

Kaiburr Assessment - Task 3: WEB UI Forms  

October 2025



---### ⚡ Command ExecutionThis project is **Task 3** of the Kaiburr assessment, implementing a complete web UI for the Task Manager REST API (Task 1). The application provides a modern, responsive interface built with React 19 and Ant Design, following industry best practices and design patterns.



**Repository:** [https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git](https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git)- Execute shell commands remotely


- Real-time output display in modal- [Prerequisites](#prerequisites)- [Prerequisites](#prerequisites)

- Terminal-style output formatting

- Exit code status indication**Key Highlights:**



### 📜 Execution History- ✅ Full CRUD operations (Create, Read, Update, Delete)- [Installation & Setup](#installation--setup)- [Installation & Setup](#installation--setup)

- Complete timeline of all executions

- Expandable output sections- ✅ Real-time task search functionality

- Timestamp tracking for each execution

- Copy-to-clipboard functionality- ✅ Command execution with output display- [Application Screenshots](#application-screenshots)- [Application Screenshots](#application-screenshots)



### 🎨 User Interface- ✅ Execution history tracking with timeline view

- Dark theme (#000 background) with custom styling

- Inter font family for modern typography- ✅ Dark theme with custom Ant Design configuration- [Project Structure](#project-structure)- [Project Structure](#project-structure)

- Smooth animations and transitions

- Loading states and error handling- ✅ Fully responsive design for all devices

- Fully responsive for mobile, tablet, and desktop

- ✅ TypeScript for type safety and better developer experience- [API Integration](#api-integration)- [API Integration](#api-integration)

---



## 🛠️ Technology Stack

---- [Environment Configuration](#environment-configuration)- [Environment Configuration](#environment-configuration)

| Technology | Version | Purpose |

|------------|---------|---------|

| **React** | 19.0.0 | Frontend framework |

| **TypeScript** | 5.5.0 | Type-safe JavaScript |## ✨ Features- [Repository](#repository)- [Repository](#repository)

| **Ant Design** | 5.0.0 | UI component library |

| **Vite** | 5.4.21 | Build tool and dev server |

| **Axios** | 1.5.0 | HTTP client for API calls |

| **React Router** | 6.15.0 | Client-side routing |### 📊 Dashboard- [Author](#author)- [Author](#author)

| **Lucide React** | 0.546.0 | Icon library |

| **Day.js** | 1.11.10 | Date formatting utility |- Overview statistics (Total Tasks, Active Tasks, Completed Tasks, Success Rate)



---- Recent tasks display with quick access



## 📦 Prerequisites- Quick action cards for common operations



Before running this application, ensure you have:------



1. **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)### 📝 Task Management

2. **npm** (comes with Node.js)

3. **Backend API** (Task 1) running on `http://localhost:8080`- Create new tasks with form validation

   - Ensure CORS is enabled in the backend

   - API should be accessible at `http://localhost:8080/api/tasks`- View all tasks in a paginated table



---- Real-time search by task name## 🎯 Overview## 🎯 Overview



## 🚀 Installation & Setup- Delete tasks with confirmation dialog



### 1. Clone the Repository- View detailed task information



```powershell

git clone https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git

cd Task-3.-WEB-UI-Forms.### ⚡ Command ExecutionThis project is **Task 3** of the Kaiburr assessment, implementing a complete web UI for the Task Manager REST API (Task 1). The application provides a modern, responsive interface built with React 19 and Ant Design, following industry best practices and design patterns.This project is **Task 3** of the Kaiburr assessment, implementing a complete web UI for the Task Manager REST API (Task 1). The application provides a modern, responsive interface built with React 19 and Ant Design, following industry best practices and design patterns.

```

- Execute shell commands remotely

### 2. Install Dependencies

- Real-time output display in modal

```powershell

npm install- Terminal-style output formatting

```

- Exit code status indication**Key Highlights:****Key Highlights:**

### 3. Configure Environment Variables



Create a `.env` file in the root directory (or use the provided `.env.example`):

### 📜 Execution History- ✅ Full CRUD operations (Create, Read, Update, Delete)- ✅ Full CRUD operations (Create, Read, Update, Delete)

```env

VITE_API_URL=http://localhost:8080/api- Complete timeline of all executions

```

- Expandable output sections- ✅ Real-time task search functionality- ✅ Real-time task search functionality

### 4. Start the Development Server

- Timestamp tracking for each execution

```powershell

npm run dev- Copy-to-clipboard functionality- ✅ Command execution with output display- ✅ Command execution with output display

```



The application will start on `http://localhost:3000` (or the next available port).

### 🎨 User Interface- ✅ Execution history tracking with timeline view- ✅ Execution history tracking with timeline view

### 5. Build for Production (Optional)

- Dark theme (#000 background) with custom styling

```powershell

npm run build- Inter font family for modern typography- ✅ Dark theme with custom Ant Design configuration- ✅ Dark theme with custom Ant Design configuration

npm run preview

```- Smooth animations and transitions



---- Loading states and error handling- ✅ Fully responsive design for all devices- ✅ Fully responsive design for all devices



## 📸 Application Screenshots- Fully responsive for mobile, tablet, and desktop



### Home Dashboard- ✅ TypeScript for type safety and better developer experience- ✅ TypeScript for type safety and better developer experience

![Home Page](screenshots/home%20page.png)

*Dashboard showing task statistics, recent tasks, and quick action cards*---



### Home After Creating Tasks

![Home After Create](screenshots/home%20page%20after%20create.png)

*Dashboard updated with newly created tasks*## 🛠️ Technology Stack



### Create Task Form------

![Create Task](screenshots/create%20task%20form.png)

*Task creation form with validation - fields include Task Name, Owner, and Command*| Technology | Version | Purpose |



### Task List View|------------|---------|---------|

![Task List](screenshots/task%20list.png)

*Comprehensive table view with all tasks, search functionality, and action buttons*| **React** | 19.0.0 | Frontend framework |



### Task Details| **TypeScript** | 5.5.0 | Type-safe JavaScript |## ✨ Features## ✨ Features

![Task Details](screenshots/detailes%20of%20the%20task.png)

*Detailed view showing task information, execution button, and complete task metadata*| **Ant Design** | 5.0.0 | UI component library |



### Delete Confirmation| **Vite** | 5.4.21 | Build tool and dev server |

![Delete Confirmation](screenshots/delete%20confirmation%20(1).png)

*Confirmation dialog before deleting a task to prevent accidental deletions*| **Axios** | 1.5.0 | HTTP client for API calls |



### Execution History| **React Router** | 6.15.0 | Client-side routing |### 📊 Dashboard### 📊 Dashboard

![Execution History](screenshots/execution%20history.png)

*Timeline view of all task executions with expandable output sections*| **Lucide React** | 0.546.0 | Icon library |



### API Integration - Before| **Day.js** | 1.11.10 | Date formatting utility |- Overview statistics (Total Tasks, Active Tasks, Completed Tasks, Success Rate)- Overview statistics (Total Tasks, Active Tasks, Completed Tasks, Success Rate)

![API Before](screenshots/api%20before.png)

*Backend API endpoint before task creation*



### API Integration - After---- Recent tasks display with quick access- Recent tasks display with quick access

![API After](screenshots/api%20after.png)

*Backend API response after successful task creation, showing data persistence*



---## 📦 Prerequisites- Quick action cards for common operations- Quick action cards for common operations



## 📂 Project Structure



```Before running this application, ensure you have:

task3/

├── public/                  # Static assets

├── src/

│   ├── components/          # React components1. **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)### 📝 Task Management### 📝 Task Management

│   │   ├── Layout.tsx       # Main layout with header/footer

│   │   ├── Dashboard.tsx    # Home page dashboard2. **npm** (comes with Node.js)

│   │   ├── TaskList.tsx     # Task table with search

│   │   ├── CreateTask.tsx   # Task creation form3. **Backend API** (Task 1) running on `http://localhost:8080`- Create new tasks with form validation- Create new tasks with form validation

│   │   └── TaskDetail.tsx   # Task details & execution

│   ├── services/   - Ensure CORS is enabled in the backend

│   │   └── api.ts           # Axios API client

│   ├── types/   - API should be accessible at `http://localhost:8080/api/tasks`- View all tasks in a paginated table- View all tasks in a paginated table

│   │   └── task.types.ts    # TypeScript interfaces

│   ├── styles.css           # Global styles & theme

│   ├── main.tsx             # Application entry point

│   └── App.tsx              # Route configuration---- Real-time search by task name- Real-time search by task name

├── screenshots/             # Application screenshots

├── .env                     # Environment variables

├── .env.example             # Environment template

├── package.json             # Dependencies## 🚀 Installation & Setup- Delete tasks with confirmation dialog- Delete tasks with confirmation dialog

├── tsconfig.json            # TypeScript configuration

├── vite.config.ts           # Vite configuration

└── README.md                # This file

```### 1. Clone the Repository- View detailed task information- View detailed task information



---



## 🔌 API Integration```powershell



The application integrates with the Task Manager REST API (Task 1) with the following endpoints:git clone https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git



| Method | Endpoint | Description |cd Task-3.-WEB-UI-Forms.### ⚡ Command Execution### ⚡ Command Execution

|--------|----------|-------------|

| `GET` | `/api/tasks` | Retrieve all tasks |```

| `GET` | `/api/tasks/{id}` | Get task by ID |

| `POST` | `/api/tasks` | Create new task |- Execute shell commands remotely- Execute shell commands remotely

| `DELETE` | `/api/tasks/{id}` | Delete task |

| `GET` | `/api/tasks/search?name={name}` | Search tasks by name |### 2. Install Dependencies

| `POST` | `/api/tasks/{id}/execute` | Execute task command |

| `GET` | `/api/tasks/{id}/executions` | Get execution history |- Real-time output display in modal- Real-time output display in modal



**Example API Request:**```powershell



```javascriptnpm install- Terminal-style output formatting- Terminal-style output formatting

// Create Task

POST http://localhost:8080/api/tasks```

Content-Type: application/json

- Exit code status indication- Exit code status indication

{

  "name": "List Files",### 3. Configure Environment Variables

  "owner": "Kishore N",

  "command": "dir"

}

```Create a `.env` file in the root directory (or use the provided `.env.example`):



---### 📜 Execution History### 📜 Execution History



## ⚙️ Environment Configuration```env



The application uses environment variables for configuration. Create a `.env` file:VITE_API_URL=http://localhost:8080/api- Complete timeline of all executions- Complete timeline of all executions



```env```

# Backend API URL

VITE_API_URL=http://localhost:8080/api- Expandable output sections- Expandable output sections



# Optional: Port configuration (if needed)### 4. Start the Development Server

# PORT=3000

```- Timestamp tracking for each execution- Timestamp tracking for each execution



**Important Notes:**```powershell

- The backend must have CORS enabled to allow requests from `http://localhost:3000`

- Ensure the backend is running before starting the frontendnpm run dev- Copy-to-clipboard functionality- Copy-to-clipboard functionality

- API timeout is set to 10 seconds (configurable in `src/services/api.ts`)

```

---



## 🔗 Repository

The application will start on `http://localhost:3000` (or the next available port).

**GitHub Repository:** [https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git](https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git)

### 🎨 User Interface### 🎨 User Interface

---

### 5. Build for Production (Optional)

## 👤 Author

- Dark theme (#000 background) with custom styling- Dark theme (#000 background) with custom styling

**Kishore N**

```powershell

- Created as part of the Kaiburr Assessment

- Task 3: WEB UI Forms Implementationnpm run build- Inter font family for modern typography- Inter font family for modern typography

- Date: October 2025

npm run preview

---

```- Smooth animations and transitions- Smooth animations and transitions

## 📝 Additional Notes



- **Dark Theme:** The application uses a custom dark theme with `#000` background and carefully selected gray tones for optimal readability.

- **Inter Font:** Modern, clean typography using the Inter font family from Google Fonts.---- Loading states and error handling- Loading states and error handling

- **Responsive Design:** Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices.

- **Form Validation:** Client-side validation for all forms to ensure data integrity before API calls.

- **Error Handling:** Comprehensive error handling with user-friendly messages using Ant Design's message component.

- **Loading States:** Visual feedback during API calls to improve user experience.## 📸 Application Screenshots- Fully responsive for mobile, tablet, and desktop- Fully responsive for mobile, tablet, and desktop



---



**Built with ❤️ by Kishore N**### Home Dashboard


![Home Page](screenshots/home%20page.png)

*Dashboard showing task statistics, recent tasks, and quick action cards*------



### Home After Creating Tasks

![Home After Create](screenshots/home%20page%20after%20create.png)

*Dashboard updated with newly created tasks*## 🛠️ Technology Stack## 🛠️ Technology Stack



### Create Task Form

![Create Task](screenshots/create%20task%20form.png)

*Task creation form with validation - fields include Task Name, Owner, and Command*| Technology | Version | Purpose || Technology | Version | Purpose |



### Task List View|------------|---------|---------||------------|---------|---------|

![Task List](screenshots/task%20list.png)

*Comprehensive table view with all tasks, search functionality, and action buttons*| **React** | 19.0.0 | Frontend framework || **React** | 19.0.0 | Frontend framework |



### Task Details| **TypeScript** | 5.5.0 | Type-safe JavaScript || **TypeScript** | 5.5.0 | Type-safe JavaScript |

![Task Details](screenshots/detailes%20of%20the%20task.png)

*Detailed view showing task information, execution button, and complete task metadata*| **Ant Design** | 5.0.0 | UI component library || **Ant Design** | 5.0.0 | UI component library |



### Delete Confirmation| **Vite** | 5.4.21 | Build tool and dev server || **Vite** | 5.4.21 | Build tool and dev server |

![Delete Confirmation](screenshots/delete%20confirmation%20(1).png)

*Confirmation dialog before deleting a task to prevent accidental deletions*| **Axios** | 1.5.0 | HTTP client for API calls || **Axios** | 1.5.0 | HTTP client for API calls |



### Execution History| **React Router** | 6.15.0 | Client-side routing || **React Router** | 6.15.0 | Client-side routing |

![Execution History](screenshots/execution%20history.png)

*Timeline view of all task executions with expandable output sections*| **Lucide React** | 0.546.0 | Icon library || **Lucide React** | 0.546.0 | Icon library |



### API Integration - Before| **Day.js** | 1.11.10 | Date formatting utility || **Day.js** | 1.11.10 | Date formatting utility |

![API Before](screenshots/api%20before.png)

*Backend API endpoint before task creation*



### API Integration - After------

![API After](screenshots/api%20after.png)

*Backend API response after successful task creation, showing data persistence*



---## 📦 Prerequisites## 📦 Prerequisites



## 📂 Project Structure



```Before running this application, ensure you have:Before running this application, ensure you have:

task3/

├── public/                  # Static assets

├── src/

│   ├── components/          # React components1. **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)1. **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)

│   │   ├── Layout.tsx       # Main layout with header/footer

│   │   ├── Dashboard.tsx    # Home page dashboard2. **npm** (comes with Node.js)2. **npm** (comes with Node.js)

│   │   ├── TaskList.tsx     # Task table with search

│   │   ├── CreateTask.tsx   # Task creation form3. **Backend API** (Task 1) running on `http://localhost:8080`3. **Backend API** (Task 1) running on `http://localhost:8080`

│   │   └── TaskDetail.tsx   # Task details & execution

│   ├── services/   - Ensure CORS is enabled in the backend   - Ensure CORS is enabled in the backend

│   │   └── api.ts           # Axios API client

│   ├── types/   - API should be accessible at `http://localhost:8080/api/tasks`   - API should be accessible at `http://localhost:8080/api/tasks`

│   │   └── task.types.ts    # TypeScript interfaces

│   ├── styles.css           # Global styles & theme

│   ├── main.tsx             # Application entry point

│   └── App.tsx              # Route configuration------

├── screenshots/             # Application screenshots

├── .env                     # Environment variables

├── .env.example             # Environment template

├── package.json             # Dependencies## 🚀 Installation & Setup## 🚀 Installation & Setup

├── tsconfig.json            # TypeScript configuration

├── vite.config.ts           # Vite configuration

└── README.md                # This file

```### 1. Clone the Repository### 1. Clone the Repository



---



## 🔌 API Integration```powershell```powershell



The application integrates with the Task Manager REST API (Task 1) with the following endpoints:git clone https://github.com/kishore110804/Task-3.-WEB-UI-Forms..gitgit clone https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git



| Method | Endpoint | Description |cd Task-3.-WEB-UI-Forms.cd Task-3.-WEB-UI-Forms.

|--------|----------|-------------|

| `GET` | `/api/tasks` | Retrieve all tasks |``````

| `GET` | `/api/tasks/{id}` | Get task by ID |

| `POST` | `/api/tasks` | Create new task |

| `DELETE` | `/api/tasks/{id}` | Delete task |

| `GET` | `/api/tasks/search?name={name}` | Search tasks by name |### 2. Install Dependencies### 2. Install Dependencies

| `POST` | `/api/tasks/{id}/execute` | Execute task command |

| `GET` | `/api/tasks/{id}/executions` | Get execution history |



**Example API Request:**```powershell```powershell



```javascriptnpm installnpm install

// Create Task

POST http://localhost:8080/api/tasks``````

Content-Type: application/json



{

  "name": "List Files",### 3. Configure Environment Variables### 3. Configure Environment Variables

  "owner": "Kishore N",

  "command": "dir"

}

```Create a `.env` file in the root directory (or use the provided `.env.example`):Create a `.env` file in the root directory (or use the provided `.env.example`):



---



## ⚙️ Environment Configuration```env```env



The application uses environment variables for configuration. Create a `.env` file:VITE_API_URL=http://localhost:8080/apiVITE_API_URL=http://localhost:8080/api



```env``````

# Backend API URL

VITE_API_URL=http://localhost:8080/api



# Optional: Port configuration (if needed)### 4. Start the Development Server### 4. Start the Development Server

# PORT=3000

```



**Important Notes:**```powershell```powershell

- The backend must have CORS enabled to allow requests from `http://localhost:3000`

- Ensure the backend is running before starting the frontendnpm run devnpm run dev

- API timeout is set to 10 seconds (configurable in `src/services/api.ts`)

``````

---



## 🔗 Repository

The application will start on `http://localhost:3000` (or the next available port).The application will start on `http://localhost:3000` (or the next available port).

**GitHub Repository:** [https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git](https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git)



---

### 5. Build for Production (Optional)### 5. Build for Production (Optional)

## 👤 Author



**Kishore N**

```powershell```powershell

- Created as part of the Kaiburr Assessment

- Task 3: WEB UI Forms Implementationnpm run buildnpm run build

- Date: October 2025

npm run previewnpm run preview

---

``````

## 📝 Additional Notes



- **Dark Theme:** The application uses a custom dark theme with `#000` background and carefully selected gray tones for optimal readability.

- **Inter Font:** Modern, clean typography using the Inter font family from Google Fonts.------

- **Responsive Design:** Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices.

- **Form Validation:** Client-side validation for all forms to ensure data integrity before API calls.

- **Error Handling:** Comprehensive error handling with user-friendly messages using Ant Design's message component.

- **Loading States:** Visual feedback during API calls to improve user experience.## 📸 Application Screenshots## 📸 Application Screenshots



---



**Built with ❤️ by Kishore N**### Home Dashboard### Home Dashboard


![Home Page](screenshots/home%20page.png)![Home Page](screenshots/home%20page.png)

*Dashboard showing task statistics, recent tasks, and quick action cards**Dashboard showing task statistics, recent tasks, and quick action cards*



### Home After Creating Tasks### Home After Creating Tasks

![Home After Create](screenshots/home%20page%20after%20create.png)![Home After Create](screenshots/home%20page%20after%20create.png)

*Dashboard updated with newly created tasks**Dashboard updated with newly created tasks*



### Create Task Form### Create Task Form

![Create Task](screenshots/create%20task%20form.png)![Create Task](screenshots/create%20task%20form.png)

*Task creation form with validation - fields include Task Name, Owner, and Command**Task creation form with validation - fields include Task Name, Owner, and Command*



### Task List View### Task List View

![Task List](screenshots/task%20list.png)![Task List](screenshots/task%20list.png)

*Comprehensive table view with all tasks, search functionality, and action buttons**Comprehensive table view with all tasks, search functionality, and action buttons*



### Task Details### Task Details

![Task Details](screenshots/detailes%20of%20the%20task.png)![Task Details](screenshots/detailes%20of%20the%20task.png)

*Detailed view showing task information, execution button, and complete task metadata**Detailed view showing task information, execution button, and complete task metadata*



### Delete Confirmation### Delete Confirmation

![Delete Confirmation](screenshots/delete%20confirmation%20(1).png)![Delete Confirmation](screenshots/delete%20confirmation%20(1).png)

*Confirmation dialog before deleting a task to prevent accidental deletions**Confirmation dialog before deleting a task to prevent accidental deletions*



### Execution History### Execution History

![Execution History](screenshots/execution%20history.png)![Execution History](screenshots/execution%20history.png)

*Timeline view of all task executions with expandable output sections**Timeline view of all task executions with expandable output sections*



### API Integration - Before### API Integration - Before

![API Before](screenshots/api%20before.png)![API Before](screenshots/api%20before.png)

*Backend API endpoint before task creation**Backend API endpoint before task creation*



### API Integration - After### API Integration - After

![API After](screenshots/api%20after.png)![API After](screenshots/api%20after.png)

*Backend API response after successful task creation, showing data persistence**Backend API response after successful task creation, showing data persistence*



------



## 📂 Project Structure## 📂 Project Structure



``````

task3/task3/

├── public/                  # Static assets├── public/                  # Static assets

├── src/├── src/

│   ├── components/          # React components│   ├── components/          # React components

│   │   ├── Layout.tsx       # Main layout with header/footer│   │   ├── Layout.tsx       # Main layout with header/footer

│   │   ├── Dashboard.tsx    # Home page dashboard│   │   ├── Dashboard.tsx    # Home page dashboard

│   │   ├── TaskList.tsx     # Task table with search│   │   ├── TaskList.tsx     # Task table with search

│   │   ├── CreateTask.tsx   # Task creation form│   │   ├── CreateTask.tsx   # Task creation form

│   │   └── TaskDetail.tsx   # Task details & execution│   │   └── TaskDetail.tsx   # Task details & execution

│   ├── services/│   ├── services/

│   │   └── api.ts           # Axios API client│   │   └── api.ts           # Axios API client

│   ├── types/│   ├── types/

│   │   └── task.types.ts    # TypeScript interfaces│   │   └── task.types.ts    # TypeScript interfaces

│   ├── styles.css           # Global styles & theme│   ├── styles.css           # Global styles & theme

│   ├── main.tsx             # Application entry point│   ├── main.tsx             # Application entry point

│   └── App.tsx              # Route configuration│   └── App.tsx              # Route configuration

├── screenshots/             # Application screenshots├── screenshots/             # Application screenshots

├── .env                     # Environment variables├── .env                     # Environment variables

├── .env.example             # Environment template├── .env.example             # Environment template

├── package.json             # Dependencies├── package.json             # Dependencies

├── tsconfig.json            # TypeScript configuration├── tsconfig.json            # TypeScript configuration

├── vite.config.ts           # Vite configuration├── vite.config.ts           # Vite configuration

└── README.md                # This file└── README.md                # This file

``````



------



## 🔌 API Integration## 🔌 API Integration



The application integrates with the Task Manager REST API (Task 1) with the following endpoints:The application integrates with the Task Manager REST API (Task 1) with the following endpoints:



| Method | Endpoint | Description || Method | Endpoint | Description |

|--------|----------|-------------||--------|----------|-------------|

| `GET` | `/api/tasks` | Retrieve all tasks || `GET` | `/api/tasks` | Retrieve all tasks |

| `GET` | `/api/tasks/{id}` | Get task by ID || `GET` | `/api/tasks/{id}` | Get task by ID |

| `POST` | `/api/tasks` | Create new task || `POST` | `/api/tasks` | Create new task |

| `DELETE` | `/api/tasks/{id}` | Delete task || `DELETE` | `/api/tasks/{id}` | Delete task |

| `GET` | `/api/tasks/search?name={name}` | Search tasks by name || `GET` | `/api/tasks/search?name={name}` | Search tasks by name |

| `POST` | `/api/tasks/{id}/execute` | Execute task command || `POST` | `/api/tasks/{id}/execute` | Execute task command |

| `GET` | `/api/tasks/{id}/executions` | Get execution history || `GET` | `/api/tasks/{id}/executions` | Get execution history |



**Example API Request:****Example API Request:**



```javascript```javascript

// Create Task// Create Task

POST http://localhost:8080/api/tasksPOST http://localhost:8080/api/tasks

Content-Type: application/jsonContent-Type: application/json



{{

  "name": "List Files",  "name": "List Files",

  "owner": "Kishore N",  "owner": "Kishore N",

  "command": "dir"  "command": "dir"

}}

``````



------



## ⚙️ Environment Configuration## ⚙️ Environment Configuration



The application uses environment variables for configuration. Create a `.env` file:The application uses environment variables for configuration. Create a `.env` file:



```env```env

# Backend API URL# Backend API URL

VITE_API_URL=http://localhost:8080/apiVITE_API_URL=http://localhost:8080/api



# Optional: Port configuration (if needed)# Optional: Port configuration (if needed)

# PORT=3000# PORT=3000

``````



**Important Notes:****Important Notes:**

- The backend must have CORS enabled to allow requests from `http://localhost:3000`- The backend must have CORS enabled to allow requests from `http://localhost:3000`

- Ensure the backend is running before starting the frontend- Ensure the backend is running before starting the frontend

- API timeout is set to 10 seconds (configurable in `src/services/api.ts`)- API timeout is set to 10 seconds (configurable in `src/services/api.ts`)



------



## 🔗 Repository## 🔗 Repository



**GitHub Repository:** [https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git](https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git)**GitHub Repository:** [https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git](https://github.com/kishore110804/Task-3.-WEB-UI-Forms..git)



------



## 👤 Author## 👤 Author



**Kishore N****Kishore N**



- Created as part of the Kaiburr Assessment- Created as part of the Kaiburr Assessment

- Task 3: WEB UI Forms Implementation- Task 3: WEB UI Forms Implementation

- Date: October 2025- Date: October 2025



------



## 📝 Additional Notes## 📝 Additional Notes



- **Dark Theme:** The application uses a custom dark theme with `#000` background and carefully selected gray tones for optimal readability.- **Dark Theme:** The application uses a custom dark theme with `#000` background and carefully selected gray tones for optimal readability.

- **Inter Font:** Modern, clean typography using the Inter font family from Google Fonts.- **Inter Font:** Modern, clean typography using the Inter font family from Google Fonts.

- **Responsive Design:** Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices.- **Responsive Design:** Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices.

- **Form Validation:** Client-side validation for all forms to ensure data integrity before API calls.- **Form Validation:** Client-side validation for all forms to ensure data integrity before API calls.

- **Error Handling:** Comprehensive error handling with user-friendly messages using Ant Design's message component.- **Error Handling:** Comprehensive error handling with user-friendly messages using Ant Design's message component.

- **Loading States:** Visual feedback during API calls to improve user experience.- **Loading States:** Visual feedback during API calls to improve user experience.



------



**Built with ❤️ by Kishore N****Built with ❤️ by Kishore N**

