const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage});

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.send('test')
})

app.post('/upload', upload.single('image'), (req, res) => {
    res.send('got it');
})

app.listen(3000, () => {
    console.log('server running')
});