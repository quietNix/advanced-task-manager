import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">
            <span className="title-icon">✓</span>
            Task Manager
          </h1>
          <p className="app-subtitle">Stay organized, stay productive</p>
        </header>
        
        <main className="app-main">
          <TaskForm />
          <TaskList />
        </main>

        <footer className="app-footer">
          <p>Built with React • Drag & Drop • Dark Mode</p>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
