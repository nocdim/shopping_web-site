const path = require('path');
const { Product, ProductInfo, TypeBrand, Rating, Basket, BasketProduct, Order, Comment } = require('../entities/associations')
const ApiError = require('../error/ApiError');
const { validationResult } = require('express-validator')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ProductController {
    async getAll(req, res, next) {
        
    }
    async add(req, res, next) {

    }
}

module.exports = new ProductController()