const express = require('express')
const routes = express.Router()

let db = [
    { '1': {Music: 'Intro: Persona', Track: '1'} },
    { '2': {Music: 'Boy With Luv(feat. Halsey)', Track: '2'} },
    { '3': {Music: 'Mikrokosmos', Track: '3'} },
    { '4': {Music: 'Make It Right', Track: '4'} },
    { '5': {Music: 'Home', Track: '5'} },
    { '6': {Music: 'Jamais Vu', Track: '6'} },
    { '7': {Music: 'Dionysus', Track: '7'} },
]

// Método GET (Buscar Dados)
routes.get('/', (req, res) => {
    return res.json(db)
})

// Método POST (Inserir Dados)
routes.post('/add', (req,res) => {
    const body = req.body

    if (!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

// Método DELETE (Deletar Dados)
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})


module.exports = routes