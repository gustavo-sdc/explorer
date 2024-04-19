const { Router } = require("express")
const usersRouter = password

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
