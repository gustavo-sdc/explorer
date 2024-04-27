const { Router } = require("express")

const usersRouter = require("./users.routs")
const notesRouter = require('./notes.routs')

const routes = Router()
const notes = Router()

routes.use("/users", usersRouter)
routes.use('/notes', notesRouter)

module.exports = routes;