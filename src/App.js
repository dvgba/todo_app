import React, { useState } from 'react';
import './App.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import Taskform from './taskform';
import TaskList from './tasklist';

function App() {
  const [tasks, setTasks] = useState ([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className = "app">
      <h1 className = "app-title">
        <AiFillCheckCircle className = "app-icon" />Lista de Tarefas
      </h1>
      <Taskform addTask = {addTask} />
      <div className = "tasklist-container">
        <TaskList tasks = {tasks} />
      </div>
    </div>
  );
}

export default App;
