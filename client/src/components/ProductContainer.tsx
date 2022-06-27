import React from 'react'
import { productAPI } from '../services/ProductService'
import ProductItem from './ProductItem'

const ProductContainer = () => {
    const {data: products} = productAPI.useFetchAllProductsQuery(8)
    return (
        <div>{products && products.map(product =>
                <ProductItem 
                key={product.id}
                product={product} 
                />
            )}</div>
    )
}

export default ProductContainer