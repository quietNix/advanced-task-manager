# Advanced Task Manager App

A feature-rich task manager application built with React, featuring drag-and-drop functionality, dark mode, and local storage persistence.

## 🚀 Features

### Basic Features
- ✅ Add tasks with validation
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Filter tasks (All, Completed, Pending)
- ✅ Persist tasks using Local Storage

### Advanced React Features
- ✅ **Custom Hooks**: `useLocalStorage` hook for localStorage operations
- ✅ **Context API**: Global state management without prop drilling
- ✅ **Performance Optimization**: 
  - React.memo for TaskItem component
  - useCallback for event handlers
  - useMemo for filtered tasks and task counts
- ✅ **Form Validation**: Prevents empty task submission with error messages

### Advanced CSS Features
- ✅ **Dark Mode / Light Mode**: Toggle between themes with persistent preference
- ✅ **Animations**: 
  - Smooth transitions for adding/removing tasks
  - Slide-in animations for task items
  - Hover effects and micro-interactions
  - Shake animation for validation errors
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Drag-and-Drop**: Reorder tasks using react-beautiful-dnd

## 📁 Project Structure

```
assignment/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskForm.js
│   │   ├── TaskForm.css
│   │   ├── TaskItem.js
│   │   ├── TaskItem.css
│   │   ├── TaskList.js
│   │   ├── TaskList.css
│   │   ├── ThemeToggle.js
│   │   └── ThemeToggle.css
│   ├── context/
│   │   ├── TaskContext.js
│   │   └── ThemeContext.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd advanced-task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser
