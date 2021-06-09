import React, { useState } from 'react';
import axios from 'axios';
import './uploadForm.scss';

function UploadForm() {
    const [file, setFile] = useState('');
    const [fileName, setFilename] = useState('Select File');
    const [upload, setUpload] = useState({});


    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;

            setUpload({fileName, filePath});

        } catch(err) {
            if(err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg);
            }
        }
    };


    return (
        <div>
            <h3>Upload an image</h3>
            <form className="Form" onSubmit={handleSubmit}>
                <input 
                className="Form__Input"
                type="file"
                name="image"
                onChange={handleChange}
                />
                <button
                className="Form__Button"
                type='submit'
                value='submit'
                >
                Submit
                </button>
            </form>

        { upload ? 
            <div>
                <div className="Upload__Image--Container">
                    <h3>{upload.fileName}</h3>
                    <img src={upload.filePath} alt="" />
                </div>
            </div>
            : null
             }
        
        </div>
    );
}

export default UploadForm;
