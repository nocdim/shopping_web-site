import React from 'react'
import { brandAPI } from '../services/BrandService'
import BrandItem from './BrandItem'
import Loader from './Loader'
import { Error } from './styled/LoadingError'

const BrandContainer = () => {
  const { data: brands, error, isLoading } = brandAPI.useFetchAllBrandsQuery([])
  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error>Loading error...</Error>}
      {brands && brands.map(brand =>
        <BrandItem key={brand.id} brand={brand} />  
      )}
    </div>
  )
}

export default BrandContainer