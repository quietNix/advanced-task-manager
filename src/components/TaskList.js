import React, { useState, useMemo } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = () => {
  const { tasks, reorderTasks } = useTaskContext();
  const [filter, setFilter] = useState('all');

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'all':
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const taskCounts = useMemo(() => ({
    all: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length
  }), [tasks]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <div className="task-list-container">
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({taskCounts.all})
        </button>
        <button
          className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending ({taskCounts.pending})
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({taskCounts.completed})
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <p>No tasks {filter !== 'all' ? filter : ''} yet!</p>
          <span className="empty-icon">📝</span>
        </div>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
              >
                {filteredTasks.map((task, index) => (
                  <TaskItem key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default TaskList;
