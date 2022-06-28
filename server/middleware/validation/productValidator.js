const { check } = require('express-validator')

exports.product = [
    check('typeId', 'Choose type...')
        .exists()
        .isNumeric(),
    check('brandId', 'Choose manufacturer...')
        .exists()
        .isNumeric(),
    check('name', 'Field "Name" is empty...')
        .exists()
        .isLength({ min: 1 }),
    check('price', 'Field "Price" is invalid...')
        .exists()
        .isFloat({ min: 0.1, max: 9999999 }),
]