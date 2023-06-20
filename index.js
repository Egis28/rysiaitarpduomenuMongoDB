require ('dotenv').config();
const connectToDB = require('./config/db');
connectToDB();

const express = require('express');
const app = express();
app.use(express.json());

const {createUser, getAllUsers, getUserById } = require ('./controllers/UserController');

const { createAd, getAdsByUser, updateAd, deletAd } = require ('./controllers/AdController');
 

app.post('/api/user', createUser);
app.get('/api/users', getAllUsers);
app.get('/api/user/:id', getUserById);

app.post('/api/ad', createAd);
app.get('/api/ads', getAdsByUser);
app.put('/api/ads', updateAd);
app.delete('/api/ads', deletAd);

app.listen(process.env.PORT, () => {

    console.log(`Server is running on PORT ${process.env.PORT}`)
});

