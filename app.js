const express = require('express')
const fs = require('fs');
const app = express()
const port = 8085
const userRoutes = require('./Routes/userRoutes')

app.use('/', userRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))