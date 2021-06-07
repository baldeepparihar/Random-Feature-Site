import React, { useState } from 'react';
import CloseIcon from '../../assets/closeIcon.png';
import './tagInput.scss';

function TagInput(props) {
    const [tags, setTags] = useState([]);

    // const tags = skill.tags || [];

    const handleTags = (e) => {
        let tagValue = e.target.value;

        if (e.key === 'Enter' && tagValue) {
            setTags([...tags, tagValue])
            e.target.value = '';
        }
    };

    const handleDelete = (idxToDelete) => {
        const filteredTags = tags.filter((_, idx) => {
            return idx !== idxToDelete;
        })
        setTags(filteredTags);
    };

    return (
        <div className="TagInput">
            <div className="TagInput__Container">
                <ul className="TagInput__Tag--Wrapper">
                    {
                        tags.map((tag, idx) => (
                            <li 
                            key={idx}
                            className="TagInput__Tag"
                            >
                            <span className="TagInput__Tag--Text">{tag}</span>
                            <img
                            className="TagInput__Tag--Icon"
                            src={CloseIcon} alt="X Icon" 
                            onClick={() => handleDelete(idx)}
                            />
                            </li>
                        ))
                    }
                </ul>
                <input
                    className="TagInput__Search" 
                    type="text"
                    placeholder="Enter a Skill tag"
                    onKeyUp={handleTags}
                />
                    
            </div>
            
        </div>
    )
}

export default TagInput;
