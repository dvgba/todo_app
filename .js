import React, { useState, useEffect } from 'react';
import './App.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import Taskform from './taskform';
import TaskList from './tasklist';
export default App;

function App() {
  const [tasks, setTasks] = useState ([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const deletedTasks = tasks[index];
    const updateTasks = [...tasks];
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
    setDeletedTasks([...deletedTasks, setDeletedTasks]);
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const storedDeletedTasks = JSON.parse(localStorage.getItem('deletedTasks'));
    if (storedDeletedTasks) {
      setDeletedTasks(storedDeletedTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
  }, [deletedTasks]);

  return (
    <div className = "app">
      <h1 className = "app-title">
        <AiFillCheckCircle className = "app-icon" />Lista de Tarefas
      </h1>
      <Taskform addTask = {addTask} />
      <div className = "tasklist-container">
        <TaskList tasks = {tasks} onDeleteTask = {deleteTask}/>
      </div>
      <div className="deleted-tasks-container">
        <h2>Tarefas Excluídas</h2>
        <ul>
          {deletedTasks.map((task, index) => (
            <li key={index}>{task.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}