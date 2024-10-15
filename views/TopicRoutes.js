const express = require('express')
const router = express.Router() 

router.get('/voting', (req, res) => {
    res.json({msg: 'Consulta de temas'})
})

router.post('/voting', (req, res) => {
    res.json({msg: 'Crear un tema'})
})
