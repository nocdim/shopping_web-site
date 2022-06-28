const { check } = require('express-validator')

exports.brand = [
    check('name', 'Поле "Название" пустое')
        .exists()
        .isLength({ min: 1 })
]