import React, { useState} from 'react';
import { v4 as uuid } from 'uuid';
import './addTaskForm.scss'

function AddTaskForm(props) {
    const [task, setTask ] = useState('');

    const { createTask } = props;


    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({task, id: uuid(), completed: false})
        setTask('')
    }

    return (
             <form className="TaskForm" onSubmit={handleSubmit}>
                <label htmlFor="task"></label>
                <input 
                className="TaskForm__Input"
                name="text"
                type="text" 
                placeholder="Add new task"
                id="task"
                value={task}
                onChange={handleChange}
                />
                <button className="TaskForm__Button">Add</button>
            </form>
    )
}

export default AddTaskForm;
