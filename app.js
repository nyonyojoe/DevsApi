const express = require('express');
const mongoose = require('mongoose');
import router from './routes/devs'

mongoose.connect('mongodb://localhost:27017/DevsDB' , {useNewUrlParser:true});

mongoose.connection.on(
    'open', ()=>{
        console.log('connection successful')
    }
);

express().listen(3000,()=>{
    console.log('listening on port 3000')
})

const devRouter = require('./routes/devs')
express().use('/devs', devRouter);  