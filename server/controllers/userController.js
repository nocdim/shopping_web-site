const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../entities/associations')

const generateJwt = (id, name, email, role) => {
    return jwt.sign(
        { id, name, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '12h' }
    )
}

class UserController {
    // Контроллер, отвечающий за логику регистрации пользователя
    async reg(req, res, next) {
        // Проверяем наличие ошибок валидатора
        const validationErrors = validationResult(req)
        if (!validationErrors.isEmpty()) {
            let warnings = {}
            let countValidationErrors = 1
            for (let errs of validationErrors.array()) {
                warnings[countValidationErrors++] = errs.msg
            }
            return next(ApiError.badRequest(warnings))
        }
    
        const { name, email, password, role } = req.body

        // Проверяем, есть ли уже зарегестрируемый пользователь с таким же email'ом
        const alreadyCreatedUser = await User.findOne({ where: {email} })
        if (alreadyCreatedUser) {
            return next(ApiError.badRequest({1: 'User with that email has already been registered...'}))
        }

        // Если ошибок и предупреждений нет, то создаем нового пользователя
        const hashedPassword = await bcrypt.hash(password, 7)
        const user = await User.create({ name, email, password: hashedPassword, role })
        await Basket.create({ userId: user.id })
        const token = generateJwt(user.id, user.name, user.email, user.role)

        return res.json({ token })
    }
}


module.exports = new UserController()