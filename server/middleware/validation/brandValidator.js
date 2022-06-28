const { check } = require('express-validator')

exports.brand = [
    check('name', 'Field "Name" is empty...')
        .exists()
        .isLength({ min: 1 })
]