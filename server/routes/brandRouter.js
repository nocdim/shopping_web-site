const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')
const validator = require('../middleware/validation/brandValidator')

module.exports = router