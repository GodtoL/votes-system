const express = require('express')
const router = express.Router() 

router.get('/', (req, res) => {
    res.json({msg: 'Consulta de temas'})
})

router.post('/', (req, res) => {
    res.json({msg: 'Crear un tema'})
})

router.put('/', (req, res) => {
    res.json({msg: 'Actualizar tema'})
})

router.delete('/', (req, res) => {
    res.json({msg : "Borrar tema"})
})

module.exports = router