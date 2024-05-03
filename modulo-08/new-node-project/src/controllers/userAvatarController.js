const DiskStorage = require("../providers/DiskStorage")
const AppError = require("../utils/AppError")
const knex = require('../database/knex')

class UserAvatarController{
    async update(req, res){
        const user_id = req.user.id
        const avatarFilename = req.file.filename

        const diskStorage = new DiskStorage()

        const users = await knex("users")
        .where({id:user_id}).first()

        if(!users){
            throw new AppError("Somente usuários autenticados podem alterar a foto do avatar", 401)
        }

        if(users.avatar){
            await diskStorage.deleteFile(users.avatar)

        }

        const filename = await diskStorage.saveFile(avatarFilename)
        users.avatar = filename

        await knex("users").update(users).where({id: user_id})

        return res.json(users)
    }
}

module.exports = UserAvatarController