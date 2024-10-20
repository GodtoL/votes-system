const express = require('express')
const app = express()
const topicRoutes = require('./views/TopicRoutes.js');
const { getTopVotedTopics, get, getAllTopics } = require('./controllers/topicController.js');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', async (req, res) => {
    try{    
        const topTopics = await getTopVotedTopics()
        console.log("el top topics es ", topTopics)
        res.render('index', {topTopics})
    } catch (err){
        res.status(500).json({message : "Hubo error"})
    }

})

app.use("/topic", topicRoutes)

app.listen(6500, () => {
    console.log('servidor activo')
})