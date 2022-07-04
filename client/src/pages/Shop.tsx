import React, { useEffect, useState } from 'react'
import BrandContainer from '../components/BrandContainer'
import Input from '../components/Input'
import SearchBar from '../components/SearchBar'
import { StyledBrandContainer, StyledTypeContainer } from '../components/styled/Shop'
import TypeContainer from '../components/TypeContainer'

const Shop = () => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <StyledTypeContainer>
        <TypeContainer />
      </StyledTypeContainer>
      <SearchBar 
        placeholder={'Search for products...'}
        value={search}
        type={"text"} 
        onChange={(value: string) => setSearch(value)}
      />
      <StyledBrandContainer>
        <BrandContainer />
      </StyledBrandContainer>
    </div>
  )
}

export default Shop