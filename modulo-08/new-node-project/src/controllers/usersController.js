const AppError = require("../utils/AppError")


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

        if (!user){
            throw new AppError('O nome é obrigatório!')
        }

        res.status(201).json({ user, email, password})
    }
}

module.exports = usersController