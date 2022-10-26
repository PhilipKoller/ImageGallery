const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const port = 3000;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req.file)
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({storage: storage});

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());


app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file)
    res.send('got it');
})

app.post('/test', (req, res) => {
    console.log(req.file)
    res.send('got it from test');
})


app.listen(port, () => {
    console.log(`server running on port ${port}`)
});