const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
const cookieParser = require("cookie-parser");
const imageDownloader = require('image-downloader')
const bcryptSalt = bcrypt.genSaltSync(8);
const jwtSecret = 'rehurehutrheurheurwweuwei38948428'

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));
app.use(cookieParser());

app.get('/test', (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    res.json('test ok!');
});

app.post('/register', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {name, email, password} = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(userDoc)

    } catch(e) {
        res.status(422).json(e)
    }

});

app.post('/login', async (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {email, password} = req.body
    const userDoc = await User.findOne({email})
    if(userDoc) {
        
        const passwordCheck = bcrypt.compareSync(password, userDoc.password)
        if(passwordCheck) {
            jwt.sign({
                email: userDoc.email, 
                id: userDoc._id,
                name: userDoc.name,

            }, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(userDoc);    
            })
           
        } else {
            res.status(422).json('password incorrect')
        }
    } else {
        res.status(422).json('not found')
    }

});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) =>{
            if(err) throw err
            const {name, email, _id} = await User.findById(userData.id)
            res.json({name, email, _id});
        })
    } else {
        res.json(null);
    }
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async (req, res) =>{
    const {link} = req.body;
    const newName = Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: `${__dirname}/uploads/${newName}`,
    })
    res.json(`${newName}`)
})
app.listen(4000);