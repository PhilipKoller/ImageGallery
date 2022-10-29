const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const ImageModel = require('./image.model')
const fs = require('fs');
require('dotenv').config();

const app = express();
const path = require('path');
//const { urlencoded } = require('express');
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
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});



const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    const newImage = new ImageModel({
        name: path.parse(req.file.originalname).name,
        image: {
            data: fs.readFileSync(path.join('images/', req.file.filename)), //fs.readFile(path.join('images/', req.file.originalname))
            contentType: 'image/png'
        }
    })
    newImage.save()
        .then(() => {
            res.send(newImage)
        })
        .catch((err) => {
            res.status(500).send('An error occurred: ', err)
        })

});


app.get('/images', (req, res) => {
    ImageModel.find({}, (err, images) => {
        if (err) {
            res.status(500).send('An error occurred: ', err);
        }
        else {
            res.send(images);
        }
    });
});

app.get('/images:name', (req, res) => {
    ImageModel.findOne({ name: req.params.name }, (err, image) => {
        if (err) {
            res.status(500).send(`Failed to fetch image: ${req.params.name}`, err)
        } else {
            res.send(image);
        }
    });
});

app.listen(port, () => {
    console.log(`server running at http://localhost:/${port}`)
});