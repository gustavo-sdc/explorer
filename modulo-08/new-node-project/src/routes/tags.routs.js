const { Router } = require("express")
const TagsController = require('../controllers/tagsController.js')
const ensureAuthenticated = require('../midllewares/ensureAuthenticated')

const tagsRouter = Router()
const tagsController = new TagsController()

tagsRouter.use(ensureAuthenticated)

tagsRouter.get('/', tagsController.index)

module.exports = tagsRouter;