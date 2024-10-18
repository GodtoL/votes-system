const express = require('express')
const app = express()
const topicRoutes = require('./views/TopicRoutes.js')
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.use("/topic", topicRoutes)

app.listen(6500, () => {
    console.log('servidor activo')
})