import React, { useEffect, useState } from 'react'
import BrandContainer from '../components/BrandContainer'
import SearchBar from '../components/SearchBar'
import { StyledBrandContainer, StyledTypeContainer } from '../components/styled/Shop'
import TypeContainer from '../components/TypeContainer'

const Shop = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <SearchBar
        placeholder={'Search for products...'}
        value={search}
        type={"text"}
        onChange={(value: string) => setSearch(value)}
      />
      <StyledTypeContainer>
        <TypeContainer />
      </StyledTypeContainer>
      <StyledBrandContainer>
        <BrandContainer />
      </StyledBrandContainer>
    </>
  )
}

export default Shop