const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const validator = require('../middleware/validator')

// Post запрос на регистрацию пользователя
router.post('/reg', validator.registration, userController.reg)

module.exports = router