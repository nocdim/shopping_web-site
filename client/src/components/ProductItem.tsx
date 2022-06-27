import React, { FC } from 'react'
import { IProduct } from '../models/IProduct'

interface ProductItemProps {
    product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({product}) => {
  return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductItem