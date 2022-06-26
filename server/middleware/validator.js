const { check } = require('express-validator')

exports.registration = [
    check('name', 'Please enter your name...')
        .isLength({ min: 1 }),
    check('email', 'Email is not valid...')
        .isEmail()
        .normalizeEmail(),
    check('password', 'Your password should consist of 8+ symbols...')
        .isLength({ min: 8 }),
    check('confirmPassword', 'Passwords do not match...')
        .custom((value, { req }) => (value === req.body.password))
] 