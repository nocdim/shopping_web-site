const { check } = require('express-validator')

exports.type = [
    check('name', 'Поле "Название" пустое')
        .exists()
        .isLength({ min: 1 })
]