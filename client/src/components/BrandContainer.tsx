import React from 'react'
import { brandAPI } from '../services/BrandService'
import BrandItem from './BrandItem'

const BrandContainer = () => {
  const { data: brands, error, isLoading } = brandAPI.useFetchAllBrandsQuery([])
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Loading error...</h1>}
      {brands && brands.map(brand =>
        <BrandItem key={brand.id} brand={brand} />  
      )}
    </div>
  )
}

export default BrandContainer