const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')
const validator = require('../middleware/validation/typeValidator')

// GET запрос для вывода разделов
router.get('/', typeController.getAll)
// POST запрос для добавления раздела
router.post('/add', checkRole('ADMIN'), validator.type, typeController.add)

module.exports = router