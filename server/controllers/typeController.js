const { Type } = require('../entities/associations')
const ApiError = require('../error/ApiError')
const { validationResult } = require('express-validator')

class TypeController {
    async getAll(req, res, next) {
        try {
            const types = await Type.findAll()
            return res.json(types)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async add(req, res, next) {
        try {
            const validationErrors = validationResult(req)
            if (!validationErrors.isEmpty()) {
                let warnings = {}
                let countValidationErrors = 1
                for (let errs of validationErrors.array()) {
                    warnings[countValidationErrors++] = errs.msg
                }
                return next(ApiError.badRequest(warnings))
            }
            let { name } = req.body
            const typeExists = await Type.findOne(
                {
                    where: { name }
                },
            )
            if (typeExists) {
                return next(ApiError.badRequest('This type of products has already been added...'))
            }
            const type = await Type.create({ name })
            return res.json(type)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new TypeController()