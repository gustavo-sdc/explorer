const { Router } = require('express')
const SessionController = require('../controllers/sessionController')

const sessionRouter = Router()
const createSession = new SessionController()

sessionRouter.post('/', createSession.create)

module.exports = sessionRouter