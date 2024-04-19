const { Router } = require("express")
const usersRouter = require("./users.routs")
const routes = Router()
routes.use("/users", usersRouter)


module.exports = routes;