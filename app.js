const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/devs')
const devsRoute = require('./routes/devs')
const logHeaders = require('./middleware/logHeaders.middleware')
const server = express()

const startServer = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/DevsDB' , {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    server.use('/dev', logHeaders, devsRoute)
     

    server.listen(3000,()=>{
        console.log('listening on port 3000')
    })
}

startServer()