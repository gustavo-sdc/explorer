const { Router } = require("express")
const usersRouter = require("./users.routs")
const sendRouter = require('./send.routs')
const routes = Router()

routes.use("/users", usersRouter)
routes.use('/send', sendRouter)

module.exports = routes;