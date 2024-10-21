const express = require('express')
const methodOverride = require('method-override');
const app = express()
const topicRoutes = require('./views/TopicRoutes.js');
const { getTopVotedTopics, get, getAllTopics } = require('./controllers/topicController.js');
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', async (req, res) => {
    try{    
        const topTopics = await getTopVotedTopics()
        const topics = await getAllTopics()
        console.log("el top topics es ", topTopics)
        res.render('index', {topTopics, topics})
    } catch (err){
        res.status(500).json({message : "Hubo error"})
    }
})

app.use("/topic", topicRoutes)

app.listen(6500, () => {
    console.log('servidor activo')
})