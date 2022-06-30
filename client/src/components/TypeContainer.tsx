import React from 'react'
import { typeAPI } from '../services/TypeService'
import TypeItem from './TypeItem'

const TypeContainer = () => {
  const { data: types } = typeAPI.useFetchAllTypesQuery([])
  return (
    <div>
      {types && types.map(type =>
        <TypeItem key={type.id} type={type} />  
      )}
    </div>
  )
}

export default TypeContainer