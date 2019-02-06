import React from 'react';
import If from './If'
import './ColumnList.css'

const ColumnList = ({ tasks, ColumnTitle, updateTask, addTask }) => {
const currentTasks = tasks.filter(task => task.status === ColumnTitle)
    return (
        <div className="column-list">
            <h3>{ColumnTitle}</h3>

            <If test={ColumnTitle === 'To Do'}>
                <form onSubmit={ e => addTask(e)}>
                    <input type="text"></input>
                    <button type="submit">Criar Tarefa</button>
                </form>
            </If>
            
            <ul>
            {currentTasks.map(task => (
                <li key={task.id}>
                <input type="checkbox"
                    onChange={e => updateTask(e.target, task)}
                    checked={ColumnTitle === 'Done'}
                    />
                    <span>{task.description}</span>
                </li>

                ))}
            </ul>
        </div>
    );
};

export default ColumnList;