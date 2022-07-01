import React, { FC } from 'react'
import { IBrand } from '../models/IBrand'

interface BrandItemProps {
  brand: IBrand;
}

const BrandItem: FC<BrandItemProps> = ({brand}) => {
  return (
    <div>
      {brand.name}
    </div>
  )
}

export default BrandItem