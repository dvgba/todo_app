import React from 'react'
import './tasklist.css';
import { AiOutlineFileText, AiFillExclamationCircle } from 'react-icons/ai';

function TaskList ({ tasks }) {
    const priorityLabels = {
        low: 'Baixa',
        medium: 'Média',
        high: 'Alta'
    };

    return (
        <table className = "task-table">
            <thead>
                <tr>
                    <th className = "task-header">
                        <AiOutlineFileText className = "header-icon" /> Tarefa
                    </th>
                    <th className = "task-header">
                        <AiFillExclamationCircle className = "header-icon" /> Tarefa
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
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TaskList
