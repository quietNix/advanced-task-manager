import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import './TaskForm.css';

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!taskText.trim()) {
      setError('Task cannot be empty!');
      return;
    }

    const success = addTask(taskText);
    if (success) {
      setTaskText('');
      setError('');
    } else {
      setError('Failed to add task!');
    }
  };

  const handleChange = (e) => {
    setTaskText(e.target.value);
    if (error) setError('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          className={`task-input ${error ? 'error' : ''}`}
          placeholder="Add a new task..."
          value={taskText}
          onChange={handleChange}
          aria-label="New task"
        />
        <button type="submit" className="add-button" aria-label="Add task">
          <span>+</span> Add Task
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default TaskForm;
