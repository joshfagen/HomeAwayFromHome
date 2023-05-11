const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(8);
const jwtSecret = 'rehurehutrheurheurwweuwei38948428'

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

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
                id: userDoc._id
            }, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json('password matches!');    
            })
           
        } else {
            res.status(422).json('password incorrect')
        }
    } else {
        res.status(422).json('not found')
    }

})
app.listen(4000);