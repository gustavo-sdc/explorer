const { Router } = require("express")
const UsersController = require('../controllers/usersController.js')

const usersRouter = Router()
const usersController = new UsersController()

/*
function myMiddleware(req, res, next){
    console.log('Você passou pelo MiddleWare')

    if(!req.body.isAdmin){
        return res.json({"message": "Usuário não autorizado"})
    }

    next()
}

Aplica o MiddleWare em todas as rotas 
usersRouter.use(myMiddleware)
*/

usersRouter.post('/', usersController.create)
usersRouter.put('/:id', usersController.update)

module.exports = usersRouter;