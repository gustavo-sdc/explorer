require ("express-async-errors")

const cors = require('cors')
const express = require('express')
const routes = require('./routes')

const AppError = require("./utils/AppError")
const migrationsRun = require("./database/sqlite/migrations")
const uploadConfig = require('./config/upload')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes)

migrationsRun()
app.use((error, req, res, next)=>{
if (error instanceof AppError){
        return res.status(error.statusCode).json({
            status:"error",
            message:error.message
        })
    }

    console.log(error)

    return res.status(500).json({
        status:"error",
        message:"Erro interno no servidor"
    })
})

const port = 3333
app.listen(port, ()=> console.log(`This server is running on Port ${port}`))