import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useTaskContext } from '../context/TaskContext';
import './TaskItem.css';

const TaskItem = memo(({ task, index }) => {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-item ${task.completed ? 'completed' : ''} ${
            snapshot.isDragging ? 'dragging' : ''
          }`}
        >
          <div className="task-content">
            <input
              type="checkbox"
              className="task-checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              aria-label={`Mark task "${task.text}" as ${
                task.completed ? 'incomplete' : 'complete'
              }`}
            />
            <span className="task-text">{task.text}</span>
          </div>
          <button
            className="delete-button"
            onClick={() => deleteTask(task.id)}
            aria-label={`Delete task "${task.text}"`}
          >
            ✕
          </button>
        </div>
      )}
    </Draggable>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
