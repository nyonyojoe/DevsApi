const express = require('express');
const router = require('express').Router()


router.get('/' , (req , res)=>{
    res.send('this is the get request')
})


router.get('/another-route' , (req , res)=>{
    // router code here
})

module.exports  = router