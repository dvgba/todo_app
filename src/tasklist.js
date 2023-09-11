import React from 'react'
import './tasklist.css';
import { AiOutlineFileText, AiFillExclamationCircle } from 'react-icons/ai';

function TaskList ({ tasks, onDeleteTask }) {
    const priorityLabels = {
        low: 'Baixa',
        medium: 'Média',
        high: 'Alta'
    };

    const handleDeleteTask = (index) => {
        onDeleteTask(index)
    }

    return (
        <table className = "task-table">
            <thead>
                <tr>
                    <th className = "task-header">
                        <AiOutlineFileText className = "header-icon" /> Tarefa
                    </th>
                    <th className = "task-header">
                        <AiFillExclamationCircle className = "header-icon" /> Prioridade
                    </th>
                    <th className = "task-header">
                        <AiFillExclamationCircle className = "header-icon" /> Excluir?
                    </th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key = {index}>
                        <td className = {`task-cell`}>{task.task}</td>
                        <td>
                            <span className = {`priority-dot priority-${task.priority}`} />
                            {priorityLabels[task.priority]}
                        </td>
                        <td>
                            <button className = "delete-button" onClick = { () => handleDeleteTask(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TaskList
