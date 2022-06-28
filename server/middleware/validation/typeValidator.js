const { check } = require('express-validator')

exports.type = [
    check('name', 'Field "Name" is empty...')
        .exists()
        .isLength({ min: 1 })
]