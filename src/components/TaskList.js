import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, completeTask, setTaskToEdit }) => {
  const notCompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div>
      <h2>Not Completed</h2>
      {notCompletedTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          setTaskToEdit={setTaskToEdit}
        />
      ))}

      <h2>Completed</h2>
      {completedTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
