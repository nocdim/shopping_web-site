import React, { FC } from 'react'
import { IBrand } from '../models/IBrand'
import { Container } from './styled/BrandItem';

interface BrandItemProps {
  brand: IBrand;
}
// test
const BrandItem: FC<BrandItemProps> = ({brand}) => {
  return (
    <Container>
      {brand.name}
    </Container>
  )
}

export default BrandItem