import React from 'react'
import { typeAPI } from '../services/TypeService'
import Loader from './Loader'
import TypeItem from './TypeItem'

const TypeContainer = () => {
  const { data: types, error, isLoading } = typeAPI.useFetchAllTypesQuery([])
  return (
    <div>
      {isLoading && <Loader />}
      {error && <h1>Loading error...</h1>}
      {types && types.map(type =>
        <TypeItem key={type.id} type={type} />  
      )}
    </div>
  )
}

export default TypeContainer