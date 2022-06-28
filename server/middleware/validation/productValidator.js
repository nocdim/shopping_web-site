const { check } = require('express-validator')

exports.product = [
    check('typeId', 'Выберите раздел')
        .exists()
        .isNumeric(),
    check('brandId', 'Выберите производителя')
        .exists()
        .isNumeric(),
    check('name', 'Поле "Название" пустое')
        .exists()
        .isLength({ min: 1 }),
    check('price', 'Поле "Стоимость" неккоректно')
        .exists()
        .isFloat({ min: 0.1, max: 9999999 }),
]