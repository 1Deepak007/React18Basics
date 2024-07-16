const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 4545;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('server is running');
    res.send('server is running');
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.fields([
    { name: 'file', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), (req, res) => {
    try {
        const files = req.files;
        res.status(200).send({ message: "Files uploaded successfully", files })
    }
    catch (error) {
        res.status(500).send({ message: "Error uploading files", error })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
