const express = require('express')
const List = require('../model/List')

const router = express.Router()

router.post('/', async (req, res) => {
    const newList = new List(req.body)
    try{
        const savedList = await newList.save()
        res.status(200).json(savedList)
    } catch {
        res.status(500).json(err)
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const all = await List.find()
        res.status(200).json(all)
    } catch {
        res.status(500).json(err)
    }
})


module.exports = router