const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')
const validator = require('../middleware/validation/productValidator')

// GET запрос для вывода продуктов
router.get('/', productController.getAll)
// POST запрос для добавления товара
router.post('/add', validator.product, productController.add)

module.exports = router