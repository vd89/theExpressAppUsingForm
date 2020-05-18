const express = require('express')
const fs = require('fs');
const app = express()
const port = 8085
const userRoutes = require('./Routes/userRoutes')
const bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('./Routes/Public'))

app.use('/', userRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))