const db = require('../database/conexion.js')

class TopicController {
    constructor(){

    }

    get(req, res){
        res.json({msg: 'Consulta de temas'})
    }

    getDetail(req,res){
        res.json({msg: 'Consulta de temas'})
    }

    insert(req,res){
    res.json({msg: 'Crear un tema'})
    }

    update(req,res){
        res.json({msg: 'Actualizar tema'})
    }
    
    delete(req,res){
        res.json({msg : "Borrar tema"})
    }
}

module.exports = new TopicController()