import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.text);
      setDate(taskToEdit.date);
    } else {
      setTask('');
      setDate('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask(taskToEdit.id, task, date);
    } else {
      addTask(task, date);
    }
    setTask('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
