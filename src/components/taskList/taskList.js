import React, { useState } from 'react'
import AddTaskForm from './addTaskForm';
import Task from './task';
import './taskList.scss';

function TaskList() {
    const [ tasks, setTasks ] = useState([]);

    const createTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(filteredTasks);
    }

    const updateTask = (id, updatedTask) => {
        const editedTasks = tasks.map(task => {
            if (task.id === id) {
                return {...task, task: updatedTask}
            }
            return task;
        })
        setTasks(editedTasks)
    }

    const toggleCompletion = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed}
            }
            return task;
        })
        setTasks(updatedTasks);
    }

  
    return (
        <div className="Container">
            <div className="TaskList">
                <h3 className="TaskList__Header">Tasks to complete</h3>
                <ul className="TaskList__Container">
                {tasks.map(task => {
                    return(
                        <Task
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                        toggleCompletion={toggleCompletion}
                        />
                    )
                })}
                </ul>
            <AddTaskForm createTask={createTask} />
            </div>
        </div>
    )
}

export default TaskList;