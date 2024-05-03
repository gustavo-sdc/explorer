const { Router } = require("express")
const multer = require('multer')
const uploadConfig = require('../config/upload')

const UsersController = require('../controllers/usersController.js')
const ensureAuthenticated = require('../midllewares/ensureAuthenticated')
const UserAvatarController = require('../controllers/userAvatarController')

const usersRouter = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRouter.post('/', usersController.create)
usersRouter.put('/', ensureAuthenticated, usersController.update)
usersRouter.patch('/avatar', ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRouter;