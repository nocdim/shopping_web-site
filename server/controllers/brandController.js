const { Brand } = require('../entities/associations')
const ApiError = require('../error/ApiError')
const { validationResult } = require('express-validator')

class BrandController {
    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll()
            return res.json(brands)
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
            const brandExists = await Brand.findOne(
                {
                    where: { name }
                },
            )
            if (brandExists) {
                return next(ApiError.badRequest('This manufacturer has already been added...'))
            }
            const brand = await Brand.create({ name })
            return res.json(brand)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BrandController()