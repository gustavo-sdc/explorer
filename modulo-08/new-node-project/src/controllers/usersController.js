const { hash,compare } = require('bcryptjs')
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class usersController {
    /*
    index -GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para remover um registro
    */

    async create(req,res){
        const { user, email, password } = req.body

        const passwordHashed = await hash(password, 8)
        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        console.log(email)
        
        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso.")
        }

        await database.run("INSERT INTO users (name, email, password) VALUES (?,?,?)", [user, email, passwordHashed])

        return res.status(201).json({})
 
    }

    async update(req, res){
        const { user, email, password, old_password } = req.body
        const { id } = req.params

        const database = await sqliteConnection()
        const userDB = await database.get(`SELECT * FROM users WHERE id = (?)`,[id])
        const updatedEmail = await database.get(`SELECT * FROM users WHERE email = (?)`,[email])

        if (!userDB){
            throw new AppError("Usuário não existente")
        } else if( updatedEmail && updatedEmail.id != userDB.id){
            throw new AppError('Este e-mail já está em uso!')
        }
    
        userDB.name = user ?? userDB.name
        userDB.email = email ?? userDB.email

        if( password && !old_password){
            throw new AppError('Você precisa passar a senha antiga, para mudar a senha')
        }

        if( password && old_password){
            const checkOldPassword = await compare(old_password, userDB.password)

            if(!checkOldPassword){
                throw new AppError("A senha antiga não confere.")
            }

            userDB.password =  await hash(password, 8)
        }


        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_add = DATETIME('now')
            WHERE id = ?
        `,[userDB.name, userDB.email, userDB.password, id])  

        return res.status(200).json()


    }
}

module.exports = usersController