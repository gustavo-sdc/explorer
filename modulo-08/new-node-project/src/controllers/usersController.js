class usersController {
    /*
    index -GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para remover um registro
    */

    create(req,res){
        const { user, email, password } = req.body

        res.send({ user, email, password})
    }

    show(req,res){
        
    }
}

module.exports = usersController