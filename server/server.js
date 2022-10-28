const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const ImageModel = require('./image.model')
const fs = require('fs');

const app = express();
const path = require('path');
const { urlencoded } = require('express');
const port = 3000;


app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist'))); // serve static files 
app.use(express.json()); // accept json data incoming // allows for req.body 
app.use(express.urlencoded({ extended: true })); // form data


mongoose.connect(process.env.DB)
    .then(() => {
        console.log('mongo atlas connected')
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req.file)
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
       const newImage = new ImageModel({
           name: req.file.originalname,
           image: {
               data: fs.readFileSync(path.join('images/', req.file.filename)), //fs.readFile(path.join('images/', req.file.originalname))
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

});


app.get('/images', (req, res) => {
    ImageModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.send({ items: items });
        }
    });
});
app.listen(port, () => {
    console.log(`server running at http://localhost:/${port}`)
});