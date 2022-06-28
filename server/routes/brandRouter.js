const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')
const validator = require('../middleware/validation/brandValidator')

// GET запрос для вывода производителей
router.get('/', brandController.getAll)
// POST запрос для добавления производителя
router.post('/add', checkRole('ADMIN'), validator.brand, brandController.add)

module.exports = router