import React, { useState } from 'react';
import './taskform.css';
import { RiAddLine } from 'react-icons/ri';

function Taskform ( { addTask }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;

        addTask({task, priority});
        setTask('');
        setPriority('low');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder = "Nome da Tarefa"
                value = {task}
                onChange = {(e => setTask(e.target.value))} 
            />
            <select
                value = {priority}
                onChange = {(e => setPriority(e.target.value))} 
            >
                <option value = "low">Baixa Prioridade</option>
                <option value = "medium">Média Prioridade</option>
                <option value = "high">Alta Prioridade</option>
            </select>
            <button type = "submit">
                <RiAddLine className = "button-icon" /> Adicionar Tarefa
            </button>
        </form>
    );
}



export default Taskform
