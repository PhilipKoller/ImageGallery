const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const ImageModel = require('./image.model')

const app = express();
const path = require('path');
const { urlencoded } = require('express');
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

mongoose.connect(process.env.KEY)
    .then(() => {
        console.log('mongo atlas connected')
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

const storage = multer.diskStorage({
    destination: "uploaded_images",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


const upload = multer({storage: storage}).single('image');


app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            const newImage = new ImageModel({
                name: req.file.filename,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save()
            .then(() => {
                res.send('uploaded')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});