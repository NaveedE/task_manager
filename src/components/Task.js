import React from 'react';

const Task = ({ task, deleteTask, completeTask, setTaskToEdit }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text} ({task.date})</span>
      <div>
        <button className="complete-btn" onClick={() => completeTask(task.id)}>
          {task.completed ? 'Not Completed' : 'Completed'}
        </button>
        <button className="edit-btn" onClick={() => setTaskToEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
