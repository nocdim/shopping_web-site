import React, { useEffect, useState } from 'react'
import BrandContainer from '../components/BrandContainer'
import Input from '../components/Input'
import { StyledBrandContainer, StyledTypeContainer } from '../components/styled/Shop'
import TypeContainer from '../components/TypeContainer'

const Shop = () => {
  const [search, setSearch] = useState('')
  let link = window.location.href.substring(21)
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