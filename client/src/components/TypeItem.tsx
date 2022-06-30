import React, { FC } from 'react'
import { IType } from '../models/IType'

interface TypeItemProps {
  type: IType;
}

const TypeItem: FC<TypeItemProps> = ({type}) => {
  return (
    <div>
      {type.name}
    </div>
  )
}

export default TypeItem