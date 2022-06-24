require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 1234

const app = express()
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)


// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        // устанавливаем подключение к БД
        await sequelize.authenticate() 
        app.listen(PORT, () => {
            console.log(`Server has been launched on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()