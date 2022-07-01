import React, { useEffect } from 'react'
import BrandContainer from '../components/BrandContainer'
import { StyledBrandContainer, StyledTypeContainer } from '../components/styled/Shop'
import TypeContainer from '../components/TypeContainer'

const Shop = () => {
  return (
    <div>
      <StyledTypeContainer>
        <TypeContainer />
      </StyledTypeContainer>
      <StyledBrandContainer>
        <BrandContainer />
      </StyledBrandContainer>
    </div>
  )
}

export default Shop