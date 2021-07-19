const express = require('express')
const router = express.Router()

const Room = require('../models/Room.model')

// CREATE
router.post('/room', async (req, res) => {
    try{
        const newRoom = await Room.create(req.body)
        return res.status(201).json(newRoom)

    } catch(err){
        return res.status(500).json({msg: JSON.stringify(err)})
    }
})

//UPDATE 
router.patch('/room/:id', async (req, res) => {
    try{
        const updateRoom = await Room.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true},
        )

        if(!updateRoom){
            return res.status(404).json({msg: 'Room not found!'})
        }
        return res.status(200).json(updateRoom)

    } catch(err){
        return res.status(500).json({msg: JSON.stringify(err)})
    }
})

//DELETE
router.delete('room/:id', async (req, res) => {
    try{
    const deleteRoom = await Room.delete({ _id: req.params.id })
    
    if(!deleteRoom){
        return res.status(404).json({msg: 'Room not found!'})
    }
    return res.status(200).json({})

    }catch(err){
        return res.status(500).json({msg: JSON.stringify(err)})
    }
})

//READ ALL
router.get('/room', async (req, res) => {
    try{
        const rooms = await Room.find()
        return res.status(200).json(rooms)
        console.log(rooms)
    } catch(err) {
        return res.status(500).json({msg: JSON.stringify(err)})
    }
})

//READ ONE
router.get('/room', async (req, res) => {
    try{
        const room = await Room.findOne({ _id: req.params.id})
        return res.status(200).json(room)
    }catch(err){
        return res.status(500).json({msg: JSON.stringify(err)})
    }
})

module.exports = router