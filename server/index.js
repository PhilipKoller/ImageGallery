const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const ImageModel = require('./image.model')
const fs = require('fs');
require('dotenv').config();

const app = express();
const path = require('path');


app.use(cors());
// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));  
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


mongoose.connect(process.env.DB)
    .then(() => {
        console.log('mongo atlas connected')
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

// Save image locally 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });

// Save Image locally(Multer) => Query DB => rend response to client
app.post('/upload', upload.single('image'), (req, res) => {
    const newImage = new ImageModel({
        name: path.parse(req.file.originalname).name,
        image: {
            data: fs.readFileSync(path.join('images/', req.file.filename)), 
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

app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
});