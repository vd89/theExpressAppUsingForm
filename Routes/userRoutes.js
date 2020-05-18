
// Import of the modules
const express = require('express');
const router = express.Router()
const path = require('path');


// Setting the Routes 


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/Public/index.html'))
})
router.post('/post',  (req, res)=> {
  res.send('POST request to the homepage')
})
router.delete('/', (req, res) => {
  res.send('Delete request of the stastu ')
})

module.exports =  router

