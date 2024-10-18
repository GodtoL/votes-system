const db = require('../database/conexion.js')
const Topic = require('../models/TopicModel.js')

class TopicController {
    constructor(){

    }

    get = async(req,res) =>{
        try{
            const topics = await Topic.findAll()
            res.status(200).json(topics)
            
        } catch(err){
            console.log("Error al conseguir los datos")
            res.status(500).json({ message : 'Error al traer los datos'})
        }
        }

    getDetail = async(req,res) =>{
        const topicId = req.params.id

        try{
            const topic = await Topic.findOne({
               where: {id:topicId} 
            })

            // Verificar si existe el archivo
            if (topic == null){
                res.status(404).json({message: "No se encontro el tema ", topicId})
            }
            res.status(200).json(topic)

        } catch (err){
            res.status(500).json({message: "Error al intentar traer el tema"})
        }
    }

    insert = async(req,res) =>{
    try{
        // Crear un nuevo registro
        const newTopic = await Topic.create({
            title: req.body.title,
            content: req.body.content,
            votes: req.body.votes || 0
        })

        res.status(201).json({
            message: 'Nuevo tema creado con exito',
            data: newTopic,
        })
        
    } catch(err){
        console.log("Error al enviar datos", err)
        res.status(500).json({ error: 'Error al crear el tema' })
    }
    }

    update= async(req,res) =>{
        try{
            const topicId = req.params.id
            const updateData = {} //Objeto donde se guarda la informacion

            // Verificar los campos a actualizar
            if (req.body.title){
                updateData.title = req.body.title}
            if (req.body.content){
                updateData.content = req.body.content}

            const updateTopic = await Topic.update(
                updateData,
                {where: {id: topicId}}
            )

            // Verificar si se actualiza al menos un campo
            if (updateTopic[0] > 0){
                res.status(200).json({message: 'Tema actualizado exitosamente'})
            } else {
                res.status(404).json({message: 'No se encontro el tema', topicId})
            }

        } catch (err){
            res.status(500).json({message: 'Error al actualizar'})
        }
    }
    
    delete= async(req,res) =>{
        const topicId = req.params.id
        console.log("El id es ", topicId)
       
        try{
            // borrar un registro
            const result = await Topic.destroy({
                where:  {id: topicId}
            })
        
            if (result == 0){
                return res.status(404).json({ message: 'Tema no encontrado'})
            }
            res.status(200).json({ message : "Borrado con exito"})
            
        } catch(err){
            console.log("Error al enviar datos", err)
            res.status(500).json({ error: 'Error al crear el tema' })
        }
        }
}

module.exports = new TopicController()
