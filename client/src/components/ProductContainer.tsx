import React, { useState } from 'react'
import { productAPI } from '../services/ProductService'
import ProductItem from './ProductItem'

const ProductContainer = () => {
    const [productsLimit, setProductsLimit] = useState(8)
    const { data: products, error, isLoading } = productAPI.useFetchAllProductsQuery(productsLimit)
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Loading error...</h1>}
            <div>{products && products.map(product =>
                <ProductItem
                    key={product.id}
                    product={product}
                />
            )}</div>
        </div>
    )
}

export default ProductContainer