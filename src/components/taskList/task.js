import React, { useState } from 'react';
import DeleteIcon from '../../assets/Delete-icon.png';
import EditIcon from '../../assets/Edit-icon.png';
import './task.scss';

function Task(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState('')

    const { id, task, deleteTask, updateTask } = props;

    const handleDelete = () => {
        deleteTask(id);
    }

    const toggleForm = () => {
        setIsEditing(!isEditing);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTask(id, currentTask)
        setIsEditing(toggleForm)
    }

    const handleChange = (e) => {
       setCurrentTask(e.target.value)
    } 



    let result;

    if (isEditing) {
    
        result = (
            <div className="Task">
                <form className="Task-Edit-Form" onSubmit={handleUpdate}>
                    <input
                    type="text"
                    name="task"
                    value={currentTask}
                    onChange={handleChange}
                    />
                </form>
            </div>
            )

        } else {
        
        result = (

            <div className="Task">
                <li className="Task__Item">{task}</li>
                <div className="Task__Icons">
                    <img onClick={toggleForm} className="Task__Edit" src={EditIcon} alt="Pencil" />
                    <img onClick={handleDelete} className="Task__Delete" src={DeleteIcon} alt="Trash Can" />
                </div>
            </div>
        
        )
    }
return result;
    
}

export default Task;
