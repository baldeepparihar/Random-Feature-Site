const express = require('express');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');

const app = express();

app.use(fileUpload());
app.use('*', cors());


app.post('/upload', (req, res) => {
    
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;
    file.mv(`../public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});





app.listen(PORT, () => console.log(`Listening on ${PORT}`));









