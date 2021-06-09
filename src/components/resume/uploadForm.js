import React, { useState } from 'react';
import Pdf from './Pdf';
import axios from 'axios';

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
            <form onSubmit={handleSubmit}>
                <input 
                type="file"
                name="pdf"
                onChange={handleChange}
                />
                <button
                type='submit'
                value='submit'
                >
                Submit
                </button>
            </form>

        { upload ? <div>
            <div>
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
