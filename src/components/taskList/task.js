import React, { useState } from 'react';
import DeleteIcon from '../../assets/Delete-icon.png';
import EditIcon from '../../assets/Edit-icon.png';
import CheckedIcon from '../../assets/Checkmark-Icon.jpg';
import './task.scss';

function Task(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState('')

    const { id, task, deleteTask, updateTask, toggleCompletion, completed } = props;

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

    const handleToggle = (e) => {
        toggleCompletion(id);
    }



    let render;
    if (isEditing) {
    
        render = (
            <div className="Task">
                <form className="Task__Edit--Form" onSubmit={handleUpdate}>
                    <input
                    className="Task__Edit--Input"
                    type="text"
                    name="task"
                    value={currentTask}
                    onChange={handleChange}
                    />
                </form>
            </div>
            )

        } else {
        
        render = (

            <div className="Task">
                <div className="Task__Item-Checkmark--Container">
                    <img onClick={handleToggle} className={completed ? "Task__Checkmark Completed" : "Task__Checkmark"} src={CheckedIcon} alt="Checkmark Icon" />
                    <li onClick={handleToggle} className={completed ? "Task__Item Completed" : "Task__Item"}>{task}</li>
                </div>
                <div className="Task__Icons">
                    <img onClick={toggleForm} className="Task__Edit" src={EditIcon} alt="Pencil" />
                    <img onClick={handleDelete} className="Task__Delete" src={DeleteIcon} alt="Trash Can" />
                </div>
            </div>
        
        )
    }
    
return render;
    
}

export default Task;
