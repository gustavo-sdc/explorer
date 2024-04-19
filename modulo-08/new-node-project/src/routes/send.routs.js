const { Router } = require('express')
const sendRouter = Router()

sendRouter.get('/:id', (req, res)=>{
    let { id } = req.params

    res.send(`Mensagem ID: ${id}`)
})
/*
sendRouter.get('/', (req, res)=>{
    let { page, user } = req.query

    res.send(`Página: ${page}. Usuário: ${user}`)
})*/

module.exports = sendRouter