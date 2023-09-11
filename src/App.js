import React, { useState, useEffect } from 'react';
import './App.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import Taskform from './taskform';
import TaskList from './tasklist';

function App() {
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    const createdTime = new Date();
    newTask.createdTime = createdTime;
  };

  const deleteTask = (index) => {
    const deletedTask = tasks[index];
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setDeletedTasks([...deletedTasks, deletedTask]);
    const deletedTime = new Date();
    deletedTask.deletedTime = deletedTime;
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }

    const storedDeletedTasks = JSON.parse(localStorage.getItem('deletedTasks'));
    if (storedDeletedTasks) {
      setDeletedTasks(storedDeletedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
  }, [deletedTasks]);

  return (
    <div className="app">
      <h1 className="app-title">
        <AiFillCheckCircle className="app-icon" /> Lista de Tarefas
      </h1>
      <Taskform addTask={addTask} />
      <div className="tasklist-container">
        <h2>Tarefas</h2>
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
      <div className="deleted-tasks-container">
        <h2>Tarefas Excluídas</h2>
        <ul className="deleted-tasks-list">
          {deletedTasks.map((task, index) => (
            <li key={index} className="deleted-task-item">
              <div className="task-name">{task.task}</div>
              <div className="created-time">Criado em: {task.createdTime.toLocaleString()}</div>
              <div className="deleted-time">Excluído em: {task.deletedTime.toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
