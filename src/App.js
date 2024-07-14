import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [nextTaskId, setNextTaskId] = useState(1); 

  const addTask = (text, date) => {
    const newTask = { id: nextTaskId, text, date, completed: false };
    setTasks([...tasks, newTask]);
    setNextTaskId(nextTaskId + 1); 
  };

  const editTask = (id, text, date) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text, date } : task
    ));
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  );
};

export default App;
