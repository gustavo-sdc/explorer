const express = require('express');

const app = express()
app.use(express.json())

app.get('/menssage/:id', (req, res)=>{
    let { id } = req.params

    res.send(`Mensagem ID: ${id}`)
})

app.get('/users', (req, res)=>{
    let { page, user } = req.query

    res.send(`Página: ${page}. Usuário: ${user}`)
})

app.post('/send', (req, res)=>{
    let { user, email, password } = req.body 

    //res.send(`Usuário (${user}). Email(${email}). Password(${password})`)
    res.json({user, email, password})
})

const port = 3333;

app.listen(port, ()=> console.log(`This server is running on Port ${port}`))