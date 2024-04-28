const { Router } = require("express")

const usersRouter = require("./users.routs")
const notesRouter = require('./notes.routs')
const tagsRouter = require('./tags.routs')

const routes = Router()

routes.use("/users", usersRouter)
routes.use('/notes', notesRouter)
routes.use('/tags', tagsRouter)

module.exports = routes;